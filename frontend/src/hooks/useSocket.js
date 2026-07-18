import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { SOCKET_URL } from '../config.js';
import { getAccessToken } from '../lib/accessToken.js';
import { isNativePlatform } from '../lib/platform.js';

export function useSocket(onEvent) {
  const socketRef = useRef(null);
  const handlersRef = useRef(onEvent);
  handlersRef.current = onEvent;

  useEffect(() => {
    const token = getAccessToken();
    if (!token) return undefined;

    const socket = io(SOCKET_URL, {
      auth: { token },
      transports: ['websocket'],
    });
    socketRef.current = socket;

    const eventNames = Object.keys(handlersRef.current || {});
    const bound = {};
    eventNames.forEach((evt) => {
      bound[evt] = (...args) => {
        const handler = handlersRef.current?.[evt];
        if (typeof handler === 'function') handler(...args);
      };
      socket.on(evt, bound[evt]);
    });

    // Always listen for blood_request even if handler registers later
    if (!bound.blood_request) {
      bound.blood_request = (...args) => {
        const handler = handlersRef.current?.blood_request;
        if (typeof handler === 'function') handler(...args);
      };
      socket.on('blood_request', bound.blood_request);
    }

    const onStorage = (event) => {
      if (isNativePlatform() && event.key === 'token' && !event.newValue) {
        socket.disconnect();
      }
    };
    window.addEventListener('storage', onStorage);

    return () => {
      window.removeEventListener('storage', onStorage);
      Object.entries(bound).forEach(([evt, handler]) => socket.off(evt, handler));
      socket.disconnect();
      socketRef.current = null;
    };
  }, []);

  return socketRef;
}
