import { isNativePlatform } from './platform.js';

let memoryAccessToken = null;

export function getAccessToken() {
  if (isNativePlatform()) {
    return localStorage.getItem('token');
  }
  return memoryAccessToken;
}

export function setAccessToken(token) {
  if (isNativePlatform()) {
    if (token) localStorage.setItem('token', token);
    else localStorage.removeItem('token');
    return;
  }
  memoryAccessToken = token || null;
}

export function getNativeRefreshToken() {
  if (!isNativePlatform()) return null;
  return localStorage.getItem('refresh_token');
}

export function setNativeRefreshToken(token) {
  if (!isNativePlatform()) return;
  if (token) localStorage.setItem('refresh_token', token);
  else localStorage.removeItem('refresh_token');
}

export function clearSessionTokens() {
  setAccessToken(null);
  if (isNativePlatform()) {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
  }
}

/** Web must never persist refresh; access stays memory-only. */
export function assertWebStorageClean() {
  if (isNativePlatform()) return true;
  return !localStorage.getItem('token') && !localStorage.getItem('refresh_token');
}
