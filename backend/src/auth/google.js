import crypto from 'crypto';
import { OAuth2Client } from 'google-auth-library';

export function decideGoogleFlow({ googleMatch, emailMatch }) {
  if (googleMatch) {
    return googleMatch.role === 'donor' && googleMatch.account_status === 'active'
      ? { flow: 'session' }
      : { flow: 'privileged_link_denied' };
  }
  if (!emailMatch) return { flow: 'onboarding_required' };
  return emailMatch.role === 'donor'
    ? { flow: 'link_required' }
    : { flow: 'privileged_link_denied' };
}

export async function verifyGoogleIdentity(idToken) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  if (!clientId) {
    const error = new Error('Google Sign-In is unavailable');
    error.status = 503;
    error.code = 'GOOGLE_UNCONFIGURED';
    throw error;
  }
  const ticket = await new OAuth2Client(clientId).verifyIdToken({ idToken, audience: clientId });
  const payload = ticket.getPayload();
  const validIssuer = ['accounts.google.com', 'https://accounts.google.com'].includes(payload?.iss);
  if (!payload?.sub || !payload?.email || payload.email_verified !== true || !validIssuer) {
    const error = new Error('Verified Google email required');
    error.status = 401;
    error.code = 'GOOGLE_IDENTITY_INVALID';
    throw error;
  }
  return {
    googleSub: payload.sub,
    email: payload.email.trim().toLowerCase(),
    name: String(payload.name || payload.email.split('@')[0]).trim().slice(0, 100),
  };
}

export function createOneTimeToken() {
  const token = crypto.randomBytes(32).toString('base64url');
  return { token, hash: hashOneTimeToken(token) };
}

export function hashOneTimeToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}
