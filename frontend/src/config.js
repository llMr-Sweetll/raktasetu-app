// Central config — NO React imports, NO circular deps
// Production (Railway unified): leave VITE_API_URL unset → same-origin /api + Socket.io
// Local Vite without proxy: VITE_API_URL=http://localhost:3001
const envUrl = import.meta.env.VITE_API_URL;
const API_BASE = envUrl === undefined || envUrl === ''
  ? ''
  : String(envUrl).replace(/\/$/, '');
export const API_URL = API_BASE ? `${API_BASE}/api` : '/api';
export const SOCKET_URL = API_BASE || undefined;
export const APP_VERSION = import.meta.env.VITE_APP_VERSION || '1.1.0';
/** Public Google OAuth client ID — button hidden when unset */
export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';
