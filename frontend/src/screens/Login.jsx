import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Phone, Lock, Droplet } from 'lucide-react';
import { T } from '../theme.js';
import Logo from '../components/Logo.jsx';
import Btn from '../components/Btn.jsx';
import { useAuth } from '../hooks/useAuth.js';

const body = "'Public Sans', 'Segoe UI', system-ui, sans-serif";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24, background: T.porcelain }}>
      <div style={{ width: '100%', maxWidth: 360 }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
          <div style={{ width: 64, height: 64, borderRadius: '50% 50% 50% 4px', background: T.oxblood, transform: 'rotate(45deg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Droplet size={32} color="#fff" fill="#fff" strokeWidth={1.5} style={{ transform: 'rotate(-45deg)' }} />
          </div>
        </div>
        <p style={{ fontFamily: "'Anek Latin', 'Segoe UI', system-ui, sans-serif", fontWeight: 800, fontSize: 22, textAlign: 'center', color: T.ink, margin: '0 0 4px' }}>Welcome back</p>
        <p style={{ fontFamily: body, fontSize: 13, color: T.mut, textAlign: 'center', margin: '0 0 24px' }}>Sign in to your RaktaSetu account</p>

        <form onSubmit={handleSubmit}>
          {error && (
            <div style={{ background: T.arterialSoft, border: '1px solid #F3C9D0', borderRadius: 10, padding: '10px 14px', marginBottom: 14, fontFamily: body, fontSize: 13, color: T.arterial }}>
              {error}
            </div>
          )}
          <div style={{ position: 'relative', marginBottom: 12 }}>
            <Phone size={16} color={T.faint} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text" placeholder="Phone or email" value={phone} onChange={(e) => setPhone(e.target.value)}
              autoComplete="username"
              style={{ width: '100%', padding: '13px 14px 13px 40px', borderRadius: 12, border: `1px solid ${T.line}`, fontFamily: body, fontSize: 15, background: T.card }}
            />
          </div>
          <div style={{ position: 'relative', marginBottom: 18 }}>
            <Lock size={16} color={T.faint} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '13px 14px 13px 40px', borderRadius: 12, border: `1px solid ${T.line}`, fontFamily: body, fontSize: 15, background: T.card }}
            />
          </div>
          <Btn kind="primary" full disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</Btn>
        </form>

        <p style={{ fontFamily: body, fontSize: 13, color: T.mut, textAlign: 'center', marginTop: 20 }}>
          New here? <Link to="/register" style={{ color: T.oxblood, fontWeight: 700, textDecoration: 'none' }}>Create an account</Link>
        </p>
      </div>
    </div>
  );
}
