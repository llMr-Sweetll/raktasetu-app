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
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('token');
      // HashRouter keeps navigation on this host.
      window.location.hash = '#/login';
    }
    return Promise.reject(err);
  }
);

export default api;
