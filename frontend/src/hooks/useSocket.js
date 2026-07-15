import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { SOCKET_URL } from '../config.js';

export function useSocket(onEvent) {
  const socketRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const socket = io(SOCKET_URL, {
      auth: { token },
      transports: ['websocket'],
    });
    socketRef.current = socket;

    socket.on('connect', () => console.log('Socket connected'));
    socket.on('disconnect', () => console.log('Socket disconnected'));

    if (onEvent) {
      Object.entries(onEvent).forEach(([evt, handler]) => {
        socket.on(evt, handler);
      });
    }

    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, [onEvent]);

  return socketRef;
}
