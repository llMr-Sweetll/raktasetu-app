import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Phone, Lock, Droplet } from 'lucide-react';
import { T } from '../theme.js';
import Btn from '../components/Btn.jsx';
import { useAuth } from '../hooks/useAuth.js';
import { GOOGLE_CLIENT_ID } from '../config.js';
import BloodBridgeScene from '../components/BloodBridgeScene.jsx';

const body = "'Public Sans', 'Segoe UI', system-ui, sans-serif";
const display = "'Anek Latin', 'Segoe UI', system-ui, sans-serif";

function loadGisScript() {
  if (document.getElementById('gis-script')) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.id = 'gis-script';
    s.src = 'https://accounts.google.com/gsi/client';
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Failed to load Google Sign-In'));
    document.head.appendChild(s);
  });
}

export default function Login() {
  const navigate = useNavigate();
  const { login, loginWithGoogle } = useAuth();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleConsent, setGoogleConsent] = useState(false);
  const [googleReady, setGoogleReady] = useState(false);
  const googleBtnRef = useRef(null);
  const consentRef = useRef(false);
  const loginGoogleRef = useRef(loginWithGoogle);
  const navigateRef = useRef(navigate);
  consentRef.current = googleConsent;
  loginGoogleRef.current = loginWithGoogle;
  navigateRef.current = navigate;

  useEffect(() => {
    if (!GOOGLE_CLIENT_ID) return;
    let cancelled = false;
    loadGisScript()
      .then(() => {
        if (cancelled || !window.google?.accounts?.id) return;
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: async (response) => {
            if (!consentRef.current) {
              setError('Please accept the privacy consent to continue with Google.');
              return;
            }
            setError('');
            setLoading(true);
            try {
              const user = await loginGoogleRef.current(response.credential, true);
              const dest = user.role === 'hospital' ? '/console' : user.role === 'admin' ? '/admin' : '/home';
              navigateRef.current(dest);
            } catch (err) {
              setError(err.response?.data?.error || err.message || 'Google Sign-In failed');
            } finally {
              setLoading(false);
            }
          },
        });
        setGoogleReady(true);
      })
      .catch(() => setError('Google Sign-In unavailable'));
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (!googleReady || !GOOGLE_CLIENT_ID || !googleBtnRef.current || !window.google?.accounts?.id) return;
    googleBtnRef.current.innerHTML = '';
    window.google.accounts.id.renderButton(googleBtnRef.current, {
      theme: 'outline',
      size: 'large',
      width: 312,
      text: 'continue_with',
      shape: 'rectangular',
    });
  }, [googleReady]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!phone || !password) { setError('Please enter phone/email and password'); return; }
    setLoading(true);
    try {
      const user = await login(phone, password);
      navigate(user.role === 'hospital' ? '/console' : user.role === 'admin' ? '/admin' : '/home');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', background: '#0A0506' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.55 }}>
        <BloodBridgeScene />
      </div>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(10,5,6,0.55) 0%, rgba(10,5,6,0.88) 100%)',
        zIndex: 1,
      }} />

      <div style={{
        position: 'relative', zIndex: 2, minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: 24,
      }}>
        <div style={{ width: '100%', maxWidth: 360 }}>
          <Link to="/" style={{
            fontFamily: body, fontSize: 13, color: '#A89B96', textDecoration: 'none',
            display: 'inline-block', marginBottom: 20,
          }}>
            ← RaktaSetu
          </Link>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50% 50% 50% 4px', background: T.oxblood,
              transform: 'rotate(45deg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Droplet size={28} color="#fff" fill="#fff" strokeWidth={1.5} style={{ transform: 'rotate(-45deg)' }} />
            </div>
          </div>
          <p style={{ fontFamily: display, fontWeight: 800, fontSize: 22, textAlign: 'center', color: '#F2E8E6', margin: '0 0 4px' }}>
            Welcome back
          </p>
          <p style={{ fontFamily: body, fontSize: 13, color: '#A89B96', textAlign: 'center', margin: '0 0 22px' }}>
            Sign in to your RaktaSetu account
          </p>

          <form onSubmit={handleSubmit}>
            {error && (
              <div style={{
                background: 'rgba(200,16,46,0.15)', border: '1px solid rgba(200,16,46,0.4)',
                borderRadius: 10, padding: '10px 14px', marginBottom: 14,
                fontFamily: body, fontSize: 13, color: '#F3C9D0',
              }}>
                {error}
              </div>
            )}
            <div style={{ position: 'relative', marginBottom: 12 }}>
              <Phone size={16} color="#A89B96" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text" placeholder="Phone or email" value={phone} onChange={(e) => setPhone(e.target.value)}
                autoComplete="username"
                style={{
                  width: '100%', padding: '13px 14px 13px 40px', borderRadius: 12,
                  border: '1px solid rgba(242,232,230,0.18)', fontFamily: body, fontSize: 15,
                  background: 'rgba(255,255,255,0.06)', color: '#F2E8E6',
                }}
              />
            </div>
            <div style={{ position: 'relative', marginBottom: 18 }}>
              <Lock size={16} color="#A89B96" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%', padding: '13px 14px 13px 40px', borderRadius: 12,
                  border: '1px solid rgba(242,232,230,0.18)', fontFamily: body, fontSize: 15,
                  background: 'rgba(255,255,255,0.06)', color: '#F2E8E6',
                }}
              />
            </div>
            <Btn kind="primary" full disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</Btn>
          </form>

          {GOOGLE_CLIENT_ID ? (
            <div style={{ marginTop: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '0 0 12px' }}>
                <div style={{ flex: 1, height: 1, background: 'rgba(242,232,230,0.15)' }} />
                <span style={{ fontFamily: body, fontSize: 12, color: '#6F6963' }}>or</span>
                <div style={{ flex: 1, height: 1, background: 'rgba(242,232,230,0.15)' }} />
              </div>
              <label style={{
                display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 12,
                fontFamily: body, fontSize: 12, color: '#A89B96', cursor: 'pointer',
              }}>
                <input
                  type="checkbox"
                  checked={googleConsent}
                  onChange={(e) => setGoogleConsent(e.target.checked)}
                  style={{ marginTop: 2 }}
                />
                <span>
                  I consent to RaktaSetu processing my account data per the{' '}
                  <Link to="/privacy" style={{ color: '#F2E8E6' }}>Privacy Policy</Link>.
                </span>
              </label>
              <div
                ref={googleBtnRef}
                style={{
                  display: 'flex', justifyContent: 'center',
                  opacity: googleConsent ? 1 : 0.45,
                  pointerEvents: googleConsent ? 'auto' : 'none',
                }}
              />
            </div>
          ) : null}

          <p style={{ fontFamily: body, fontSize: 12, color: '#6F6963', textAlign: 'center', marginTop: 18, lineHeight: 1.45 }}>
            Demo: +919876543210 / password123
          </p>

          <p style={{ fontFamily: body, fontSize: 13, color: '#A89B96', textAlign: 'center', marginTop: 14 }}>
            New here? <Link to="/register" style={{ color: '#F2E8E6', fontWeight: 700, textDecoration: 'none' }}>Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
