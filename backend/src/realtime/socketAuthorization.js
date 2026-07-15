import { resolveSession } from '../auth/session.js';

export function tokenFromHandshake(handshake = {}) {
  const token = handshake.auth?.token;
  return typeof token === 'string' && token.length > 0 ? token : null;
}

export function attachSocketAuthorization(io) {
  io.use(async (socket, next) => {
    try {
      const session = await resolveSession(tokenFromHandshake(socket.handshake));
      socket.data.user = session.user;
      socket.data.claims = session.claims;
      return next();
    } catch (error) {
      const authError = new Error(error.message || 'Authentication failed');
      authError.data = { code: error.code || 'SOCKET_AUTH_FAILED' };
      return next(authError);
    }
  });

  io.on('connection', (socket) => {
    const user = socket.data.user;
    socket.join(`user:${user.id}`);
    if (user.role === 'hospital' && user.hospital_id && user.approval_status === 'approved') {
      socket.join(`hospital:${user.hospital_id}`);
    }

    const expiresAt = Number(socket.data.claims.exp) * 1000;
    const timer = setTimeout(() => socket.disconnect(true), Math.max(0, expiresAt - Date.now()));
    socket.on('disconnect', () => clearTimeout(timer));

    for (const event of [
      'donor:go-on-call',
      'donor:go-off-call',
      'hospital:new-request',
      'donor:respond',
      'donor:arrived',
      'hospital:verify',
    ]) {
      socket.on(event, (payload, acknowledge) => {
        if (typeof acknowledge === 'function') {
          acknowledge({ success: false, error: { code: 'HTTP_MUTATION_REQUIRED', message: 'Use the authorized HTTP API' } });
        }
      });
    }
  });
}
