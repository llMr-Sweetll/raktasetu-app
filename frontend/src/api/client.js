import axios from 'axios';
import { API_URL } from '../config.js';

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const original = err.config;
    const refreshToken = localStorage.getItem('refresh_token');
    const isAuthOperation = original?.url?.includes('/auth/login') ||
      original?.url?.includes('/auth/refresh') ||
      original?.url?.includes('/auth/logout');
    if (err.response?.status === 401 && refreshToken && original && !original._retried && !isAuthOperation) {
      original._retried = true;
      try {
        const response = await axios.post(`${API_URL}/auth/refresh`, { refresh_token: refreshToken });
        const session = response.data.data;
        localStorage.setItem('token', session.token);
        localStorage.setItem('refresh_token', session.refresh_token);
        original.headers.Authorization = `Bearer ${session.token}`;
        return api(original);
      } catch {
        // Continue into local cleanup below.
      }
    }
    if (err.response?.status === 401 && !isAuthOperation) {
      localStorage.removeItem('token');
      localStorage.removeItem('refresh_token');
      window.location.hash = '#/login';
    }
    return Promise.reject(err);
  }
);

export default api;
