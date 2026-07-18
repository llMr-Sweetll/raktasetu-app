import test from 'node:test';
import assert from 'node:assert/strict';
import { postgresSslConfig } from '../src/db/ssl.js';

test('postgresSslConfig verifies remote TLS by default', () => {
  assert.deepEqual(
    postgresSslConfig('postgresql://user:pass@ep-x.us-east-1.aws.neon.tech/neondb'),
    { rejectUnauthorized: true },
  );
});

test('postgresSslConfig allows insecure break-glass flag', () => {
  assert.deepEqual(
    postgresSslConfig('postgresql://user:pass@ep-x.us-east-1.aws.neon.tech/neondb', {
      DATABASE_SSL_INSECURE: '1',
    }),
    { rejectUnauthorized: false },
  );
});

test('postgresSslConfig disables SSL for localhost', () => {
  assert.equal(postgresSslConfig('postgresql://postgres@localhost:5432/raktasetu'), false);
});
