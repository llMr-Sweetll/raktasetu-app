import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { Phone, Lock, Droplet } from 'lucide-react';
import { T } from '../theme.js';
import Btn from '../components/Btn.jsx';
import { useAuth } from '../hooks/useAuth.js';
import { GOOGLE_CLIENT_ID } from '../config.js';
import LazyBloodBridge from '../components/LazyBloodBridge.jsx';
import { roleHome, parseAuthRole } from '../lib/roleHome.js';
import usePageMeta from '../hooks/usePageMeta.js';

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
  const [searchParams] = useSearchParams();
  const authRole = parseAuthRole(searchParams);
  const isHospital = authRole === 'hospital';
  const { login, loginWithGoogle } = useAuth();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleReady, setGoogleReady] = useState(false);
  const googleBtnRef = useRef(null);
  const loginGoogleRef = useRef(loginWithGoogle);
  const navigateRef = useRef(navigate);

  usePageMeta({
    title: isHospital ? 'Hospital Sign In | RaktaSetu' : 'Donor Sign In | RaktaSetu',
    description: isHospital
      ? 'Sign in to the RaktaSetu hospital console.'
      : 'Sign in to review compatible blood requests near you.',
    path: '/login',
  });

  useEffect(() => {
    loginGoogleRef.current = loginWithGoogle;
    navigateRef.current = navigate;
  }, [loginWithGoogle, navigate]);

  // Google only on donor login
  useEffect(() => {
    if (isHospital) {
      document.getElementById('gis-script')?.remove();
      return;
    }
    if (!GOOGLE_CLIENT_ID) return;
    let cancelled = false;
    loadGisScript()
      .then(() => {
        if (cancelled || !window.google?.accounts?.id) return;
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: async (response) => {
            setError('');
            setLoading(true);
            try {
              const result = await loginGoogleRef.current(response.credential);
              if (result.flow === 'session') navigateRef.current(roleHome(result.user));
              if (result.flow === 'onboarding_required') navigateRef.current('/google-onboarding');
              if (result.flow === 'link_required') navigateRef.current('/account-link');
            } catch (_err) {
              setError(_err.response?.data?.error?.message || _err.message || 'Google Sign-In failed');
            } finally {
              setLoading(false);
            }
          },
        });
        setGoogleReady(true);
      })
      .catch(() => setError('Google Sign-In unavailable'));
    return () => { cancelled = true; };
  }, [isHospital]);

  useEffect(() => {
    if (isHospital || !googleReady || !GOOGLE_CLIENT_ID || !googleBtnRef.current || !window.google?.accounts?.id) return;
    googleBtnRef.current.innerHTML = '';
    window.google.accounts.id.renderButton(googleBtnRef.current, {
      theme: 'outline',
      size: 'large',
      width: Math.min(312, (googleBtnRef.current.parentElement?.clientWidth || 312)),
      text: 'continue_with',
      shape: 'rectangular',
    });
  }, [googleReady, isHospital]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!phone || !password) { setError('Please enter phone/email and password'); return; }
    setLoading(true);
    try {
      const user = await login(phone, password);
      // Destination comes from the actual role. Ignore query redirects.
      navigate(roleHome(user));
    } catch (_err) {
      const code = _err.response?.data?.error?.code;
      if (code === 'HOSPITAL_APPROVAL_PENDING') {
        navigate('/hospital-pending');
        return;
      }
      setError(_err.response?.data?.error?.message || _err.response?.data?.error || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="safe-top safe-bottom"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        overflow: 'hidden',
        background: '#0A0506',
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, opacity: 0.55 }}>
        <LazyBloodBridge />
      </div>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(10,5,6,0.55) 0%, rgba(10,5,6,0.88) 100%)',
        zIndex: 1,
      }} />

      <div style={{
        position: 'relative', zIndex: 2, minHeight: '100dvh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: 24,
      }}>
        <div style={{ width: '100%', maxWidth: 360 }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 12,
            marginBottom: 20,
            minHeight: 44,
          }}>
            <Link to="/" style={{
              fontFamily: body, fontSize: 13, color: '#A89B96', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', minHeight: 44, padding: '8px 0',
            }}>
              ← RaktaSetu
            </Link>
            {!isHospital ? (
              <Link
                to="/login?role=hospital"
                style={{
                  fontFamily: body,
                  fontSize: 12,
                  color: '#6F6963',
                  textDecoration: 'underline',
                  textUnderlineOffset: 3,
                  display: 'inline-flex',
                  alignItems: 'center',
                  minHeight: 44,
                  padding: '8px 0',
                  whiteSpace: 'nowrap',
                }}
              >
                Hospital login
              </Link>
            ) : (
              <Link
                to="/login"
                style={{
                  fontFamily: body,
                  fontSize: 12,
                  color: '#A89B96',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  minHeight: 44,
                  padding: '8px 0',
                }}
              >
                Donor sign in
              </Link>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50% 50% 50% 4px', background: T.oxblood,
              transform: 'rotate(45deg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Droplet size={28} color="#fff" fill="#fff" strokeWidth={1.5} style={{ transform: 'rotate(-45deg)' }} />
            </div>
          </div>
          <h1 style={{ fontFamily: display, fontWeight: 800, fontSize: 22, textAlign: 'center', color: '#F2E8E6', margin: '0 0 4px' }}>
            {isHospital ? 'Hospital sign in' : 'Donor sign in'}
          </h1>
          <p style={{ fontFamily: body, fontSize: 13, color: '#A89B96', textAlign: 'center', margin: '0 0 22px' }}>
            {isHospital
              ? 'Access your hospital console'
              : 'Sign in to answer blood requests nearby'}
          </p>

          <form onSubmit={handleSubmit}>
            {error && (
              <div style={{
                background: 'rgba(200,16,46,0.15)', border: '1px solid rgba(200,16,46,0.4)',
                borderRadius: 10, padding: '10px 14px', marginBottom: 14,
                fontFamily: body, fontSize: 13, color: '#F3C9D0',
              }} role="alert">
                {error}
              </div>
            )}
            <div style={{ position: 'relative', marginBottom: 12 }}>
              <Phone size={16} color="#A89B96" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text" placeholder="Phone or email" value={phone} onChange={(e) => setPhone(e.target.value)}
                autoComplete="username"
                aria-label="Phone or email"
                required
                className="rs-dark-field"
                style={{
                  width: '100%', padding: '14px 14px 14px 40px', borderRadius: 12, minHeight: 48,
                  border: '1px solid rgba(242,232,230,0.18)', fontFamily: body, fontSize: 16,
                  background: 'rgba(255,255,255,0.06)', color: '#F2E8E6',
                }}
              />
            </div>
            <div style={{ position: 'relative', marginBottom: 18 }}>
              <Lock size={16} color="#A89B96" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                aria-label="Password"
                required
                className="rs-dark-field"
                style={{
                  width: '100%', padding: '14px 14px 14px 40px', borderRadius: 12, minHeight: 48,
                  border: '1px solid rgba(242,232,230,0.18)', fontFamily: body, fontSize: 16,
                  background: 'rgba(255,255,255,0.06)', color: '#F2E8E6',
                }}
              />
            </div>
            <Btn kind="primary" full disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</Btn>
          </form>

          {!isHospital && GOOGLE_CLIENT_ID ? (
            <div style={{ marginTop: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '0 0 12px' }}>
                <div style={{ flex: 1, height: 1, background: 'rgba(242,232,230,0.15)' }} />
                <span style={{ fontFamily: body, fontSize: 12, color: '#6F6963' }}>or</span>
                <div style={{ flex: 1, height: 1, background: 'rgba(242,232,230,0.15)' }} />
              </div>
              <p style={{ fontFamily: body, fontSize: 12, color: '#A89B96', lineHeight: 1.5, margin: '0 0 12px', textAlign: 'center' }}>
                Existing linked donors sign in directly. New donors review consent and complete their profile before an account is created.
              </p>
              <div
                ref={googleBtnRef}
                style={{
                  display: 'flex', justifyContent: 'center',
                  minHeight: 44,
                }}
              />
            </div>
          ) : null}

          <p style={{ fontFamily: body, fontSize: 13, color: '#A89B96', textAlign: 'center', marginTop: 14 }}>
            New here?{' '}
            <Link
              to={isHospital ? '/register?role=hospital' : '/register'}
              style={{ color: '#F2E8E6', fontWeight: 700, textDecoration: 'none' }}
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
