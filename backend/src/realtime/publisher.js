let socketServer = null;

export function configurePublisher(io) {
  socketServer = io;
}

export function publishToUser(userId, event, payload) {
  socketServer?.to(`user:${userId}`).emit(event, payload);
}

export function publishToHospital(hospitalId, event, payload) {
  socketServer?.to(`hospital:${hospitalId}`).emit(event, payload);
}

export function disconnectUser(userId) {
  socketServer?.in(`user:${userId}`).disconnectSockets(true);
}
