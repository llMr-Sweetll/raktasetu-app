import test from 'node:test';
import assert from 'node:assert/strict';
import {
  REFRESH_COOKIE_NAME,
  REFRESH_COOKIE_PATH,
  clearRefreshCookie,
  deliverSession,
  publicSessionFields,
  readRefreshToken,
  refreshCookieOptions,
  setRefreshCookie,
  wantsNativeRefreshBody,
} from '../src/auth/refreshCookie.js';

test('refresh cookie options are httpOnly Secure SameSite=Strict on production path', () => {
  const options = refreshCookieOptions({ NODE_ENV: 'production' });
  assert.equal(options.httpOnly, true);
  assert.equal(options.secure, true);
  assert.equal(options.sameSite, 'strict');
  assert.equal(options.path, REFRESH_COOKIE_PATH);
  assert.equal(options.path, '/api/auth');
});

test('web session delivery sets cookie and omits refresh_token from body', () => {
  const cookies = [];
  const res = {
    cookie(name, value, options) {
      cookies.push({ name, value, options });
    },
  };
  const req = { get: () => '' };
  const session = {
    token: 'access-token',
    refresh_token: 'r'.repeat(48),
    expires_at: '2099-01-01T00:00:00.000Z',
  };
  const body = deliverSession(res, session, req, { NODE_ENV: 'production' });
  assert.equal(body.token, 'access-token');
  assert.equal(body.refresh_token, undefined);
  assert.equal(cookies.length, 1);
  assert.equal(cookies[0].name, REFRESH_COOKIE_NAME);
  assert.equal(cookies[0].value, session.refresh_token);
  assert.equal(cookies[0].options.httpOnly, true);
  assert.equal(cookies[0].options.secure, true);
  assert.equal(cookies[0].options.sameSite, 'strict');
  assert.equal(cookies[0].options.path, '/api/auth');
});

test('native platform header includes refresh_token in JSON body', () => {
  const res = { cookie() {} };
  const req = { get: (name) => (name === 'X-Client-Platform' ? 'native' : '') };
  assert.equal(wantsNativeRefreshBody(req), true);
  const body = deliverSession(res, {
    token: 'a',
    refresh_token: 'r'.repeat(48),
    expires_at: 't',
  }, req, { NODE_ENV: 'test' });
  assert.equal(body.refresh_token.length, 48);
});

test('readRefreshToken prefers cookie then body', () => {
  assert.equal(readRefreshToken({ cookies: { [REFRESH_COOKIE_NAME]: 'c'.repeat(40) }, body: {} }), 'c'.repeat(40));
  assert.equal(readRefreshToken({ cookies: {}, body: { refresh_token: 'b'.repeat(40) } }), 'b'.repeat(40));
  assert.equal(readRefreshToken({ cookies: {}, body: {} }), null);
});

test('publicSessionFields never leaks refresh unless asked', () => {
  const session = { token: 't', refresh_token: 'secret', expires_at: 'e' };
  assert.deepEqual(publicSessionFields(session), { token: 't', expires_at: 'e' });
  assert.equal(publicSessionFields(session, { includeRefresh: true }).refresh_token, 'secret');
});

test('clearRefreshCookie uses the same narrow path attributes', () => {
  let cleared;
  const res = {
    clearCookie(name, options) {
      cleared = { name, options };
    },
  };
  clearRefreshCookie(res, { RAILWAY_ENVIRONMENT: 'production' });
  assert.equal(cleared.name, REFRESH_COOKIE_NAME);
  assert.equal(cleared.options.path, '/api/auth');
  assert.equal(cleared.options.httpOnly, true);
  assert.equal(cleared.options.secure, true);
  assert.equal(cleared.options.sameSite, 'strict');
});

test('setRefreshCookie no-ops on empty token', () => {
  let called = false;
  setRefreshCookie({ cookie() { called = true; } }, null);
  assert.equal(called, false);
});
