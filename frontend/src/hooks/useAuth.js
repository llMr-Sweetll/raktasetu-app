import { useState, useEffect, useCallback } from 'react';
import api from '../api/client.js';
import { API_URL } from '../config.js';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }
    try {
      const res = await fetch(`${API_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setUser(data.data?.user || data.user);
    } catch {
      localStorage.removeItem('token');
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchUser(); }, [fetchUser]);

  const login = async (phone, password) => {
    const { data } = await api.post('/auth/login', { phone, password });
    const token = data.data?.token || data.token;
    const user = data.data?.user || data.user;
    localStorage.setItem('token', token);
    setUser(user);
    return user;
  };

  const register = async (payload) => {
    const { data } = await api.post('/auth/register', payload);
    const token = data.data?.token || data.token;
    const user = data.data?.user || data.user;
    localStorage.setItem('token', token);
    setUser(user);
    return user;
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const updateUser = (patch) => {
    setUser((u) => (u ? { ...u, ...patch } : u));
  };

  return { user, loading, login, register, logout, updateUser, refetch: fetchUser };
}
