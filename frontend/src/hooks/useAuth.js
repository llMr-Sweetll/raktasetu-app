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

  const login = async (identifier, password) => {
    const payload = identifier.includes('@')
      ? { email: identifier, password }
      : { phone: identifier, password };
    const { data } = await api.post('/auth/login', payload);
    const token = data.data?.token || data.token;
    const nextUser = data.data?.user || data.user;
    localStorage.setItem('token', token);
    setUser(nextUser);
    return nextUser;
  };

  const loginWithGoogle = async (idToken, consentGiven = false) => {
    const { data } = await api.post('/auth/google', {
      id_token: idToken,
      consent_given: consentGiven,
    });
    const token = data.data?.token || data.token;
    const nextUser = data.data?.user || data.user;
    localStorage.setItem('token', token);
    setUser(nextUser);
    return nextUser;
  };

  const register = async (payload) => {
    const { data } = await api.post('/auth/register', payload);
    const token = data.data?.token || data.token;
    const nextUser = data.data?.user || data.user;
    localStorage.setItem('token', token);
    setUser(nextUser);
    return nextUser;
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const updateUser = (patch) => {
    setUser((u) => (u ? { ...u, ...patch } : u));
  };

  return { user, loading, login, loginWithGoogle, register, logout, updateUser, refetch: fetchUser };
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
