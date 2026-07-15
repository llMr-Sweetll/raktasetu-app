import test from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { createApp } from '../src/app.js';

test('GET /api/health returns a versioned healthy response without binding a port', async () => {
  const response = await request(createApp({ env: { NODE_ENV: 'test', SERVE_FRONTEND: 'false' } }))
    .get('/api/health')
    .expect('Content-Type', /json/)
    .expect(200);

  assert.equal(response.body.success, true);
  assert.equal(response.body.data.status, 'healthy');
  assert.equal(typeof response.body.data.version, 'string');
  assert.equal(typeof response.body.data.timestamp, 'string');
});
