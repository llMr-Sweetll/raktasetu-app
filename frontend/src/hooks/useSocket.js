import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { SOCKET_URL } from '../config.js';

export function useSocket(onEvent) {
  const socketRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return undefined;

    const socket = io(SOCKET_URL, {
      auth: { token },
      transports: ['websocket'],
    });
    socketRef.current = socket;

    const handlers = onEvent || {};
    Object.entries(handlers).forEach(([evt, handler]) => {
      socket.on(evt, handler);
    });

    const onStorage = (event) => {
      if (event.key === 'token' && !event.newValue) {
        socket.disconnect();
      }
    };
    window.addEventListener('storage', onStorage);

    return () => {
      window.removeEventListener('storage', onStorage);
      Object.keys(handlers).forEach((evt) => socket.off(evt));
      socket.disconnect();
      socketRef.current = null;
    };
  }, [onEvent]);

  return socketRef;
}
