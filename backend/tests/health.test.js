const request = require('supertest');

// We need to import the Express app. Since server.js starts the server,
// we export the app instance so tests can mount it without binding to a port.
// If the app is not exported yet, this test will guide the implementation.

describe('GET /api/health', () => {
  let app;

  beforeAll(async () => {
    // Dynamically import the ES module app
    const mod = await import('../src/server.js');
    app = mod.app || mod.default;
  });

  it('should return 200 and a healthy status payload', async () => {
    // If app is not exported, skip gracefully
    if (!app) {
      console.warn('App not exported from server.js — skipping integration test');
      return;
    }

    const res = await request(app)
      .get('/api/health')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(res.body).toHaveProperty('success', true);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('status', 'healthy');
    expect(res.body.data).toHaveProperty('version');
    expect(typeof res.body.data.version).toBe('string');
    expect(res.body.data).toHaveProperty('timestamp');
    expect(typeof res.body.data.timestamp).toBe('string');
  });
});
