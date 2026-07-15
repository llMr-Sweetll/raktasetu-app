import { createContext, createElement, useCallback, useContext, useEffect, useState } from 'react';
import api from '../api/client.js';
import { API_URL } from '../config.js';

const AuthContext = createContext(null);

function useAuthState() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 8000);
    try {
      const res = await fetch(`${API_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
        signal: ctrl.signal,
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setUser(data.data?.user || data.user);
    } catch {
      localStorage.removeItem('token');
      setUser(null);
    } finally {
      clearTimeout(timer);
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchUser(); }, [fetchUser]);

  const storeSession = (payload) => {
    if (!payload?.token) return null;
    localStorage.setItem('token', payload.token);
    if (payload.refresh_token) localStorage.setItem('refresh_token', payload.refresh_token);
    const nextUser = payload.user;
    setUser(nextUser);
    return nextUser;
  };

  const login = async (identifier, password) => {
    const payload = identifier.includes('@')
      ? { email: identifier, password }
      : { phone: identifier, password };
    const { data } = await api.post('/auth/login', payload);
    return storeSession(data.data || data);
  };

  const loginWithGoogle = async (idToken) => {
    try {
      const { data } = await api.post('/auth/google', { id_token: idToken });
      const payload = data.data || data;
      if (payload.flow === 'session') {
        return { flow: 'session', user: storeSession(payload) };
      }
      if (payload.flow === 'onboarding_required') {
        sessionStorage.setItem('google_onboarding_token', payload.onboarding_token);
      }
      return payload;
    } catch (error) {
      const code = error.response?.data?.error?.code;
      if (code === 'ACCOUNT_LINK_REQUIRED') {
        sessionStorage.setItem('google_link_token', idToken);
        return { flow: 'link_required' };
      }
      throw error;
    }
  };

  const register = async (payload) => {
    const { data } = await api.post('/auth/register', payload);
    const result = data.data || data;
    return result.token ? { user: storeSession(result) } : result;
  };

  const completeGoogleOnboarding = async (payload) => {
    const { data } = await api.post('/auth/google/onboarding', payload);
    return storeSession(data.data || data);
  };

  const linkGoogle = async ({ identifier, password }) => {
    const idToken = sessionStorage.getItem('google_link_token');
    if (!idToken) throw new Error('Google linking session expired');
    const donor = await login(identifier, password);
    await api.post('/auth/google/link', { id_token: idToken, password });
    sessionStorage.removeItem('google_link_token');
    return donor;
  };

  const logout = async () => {
    const refreshToken = localStorage.getItem('refresh_token');
    try {
      if (localStorage.getItem('token')) {
        await api.post('/auth/logout', refreshToken ? { refresh_token: refreshToken } : {});
      }
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('refresh_token');
      setUser(null);
    }
  };

  const updateUser = (patch) => {
    setUser((u) => (u ? { ...u, ...patch } : u));
  };

  return {
    user,
    loading,
    login,
    loginWithGoogle,
    completeGoogleOnboarding,
    linkGoogle,
    register,
    logout,
    updateUser,
    refetch: fetchUser,
  };
}

export function AuthProvider({ children }) {
  const value = useAuthState();
  return createElement(AuthContext.Provider, { value }, children);
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
}
