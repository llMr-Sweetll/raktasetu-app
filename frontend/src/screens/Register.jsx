import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Phone, Mail, Lock, Droplet, MapPin } from 'lucide-react';
import { T, GROUPS } from '../theme.js';
import Btn from '../components/Btn.jsx';
import { useAuth } from '../hooks/useAuth.js';

const body = "'Public Sans', 'Segoe UI', system-ui, sans-serif";
const display = "'Anek Latin', 'Segoe UI', system-ui, sans-serif";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [role, setRole] = useState('donor');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bloodGroup, setBloodGroup] = useState('O+');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!name || !phone || !password || !city || !state) { setError('Please fill all required fields'); return; }
    if (role === 'donor' && !bloodGroup) { setError('Please select your blood group'); return; }
    setLoading(true);
    try {
      const payload = { name, phone, email, password, role, city, state, blood_group: bloodGroup };
      const user = await register(payload);
      navigate(user.role === 'hospital' ? '/console' : '/home');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = { width: '100%', padding: '13px 14px', borderRadius: 12, border: `1px solid ${T.line}`, fontFamily: body, fontSize: 15, background: T.card };

  return (
    <div style={{ minHeight: '100vh', padding: '24px 20px 40px', background: T.porcelain }}>
      <div style={{ maxWidth: 360, margin: '0 auto' }}>
        <p style={{ fontFamily: display, fontWeight: 800, fontSize: 22, color: T.ink, margin: '0 0 4px' }}>Create account</p>
        <p style={{ fontFamily: body, fontSize: 13, color: T.mut, margin: '0 0 20px' }}>Join RaktaSetu as a donor or blood bank</p>

        <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
          {['donor', 'hospital'].map((r) => (
            <button key={r} onClick={() => setRole(r)} style={{
              flex: 1, fontFamily: display, fontWeight: 700, fontSize: 13, padding: '10px 0', borderRadius: 12,
              background: role === r ? T.oxblood : T.card, color: role === r ? '#fff' : T.mut,
              border: `1px solid ${role === r ? T.oxbloodDark : T.line}`, cursor: 'pointer',
            }}>
              {r === 'donor' ? 'Blood donor' : 'Hospital / Blood bank'}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {error && (
            <div style={{ background: T.arterialSoft, border: '1px solid #F3C9D0', borderRadius: 10, padding: '10px 14px', marginBottom: 14, fontFamily: body, fontSize: 13, color: T.arterial }}>
              {error}
            </div>
          )}

          <div style={{ marginBottom: 12 }}>
            <label style={{ fontFamily: body, fontSize: 11, color: T.faint, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 6 }}>Full name</label>
            <div style={{ position: 'relative' }}>
              <User size={16} color={T.faint} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input type="text" placeholder="Your full name" value={name} onChange={(e) => setName(e.target.value)} style={{ ...inputStyle, paddingLeft: 40 }} />
            </div>
          </div>

          <div style={{ marginBottom: 12 }}>
            <label style={{ fontFamily: body, fontSize: 11, color: T.faint, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 6 }}>Phone</label>
            <div style={{ position: 'relative' }}>
              <Phone size={16} color={T.faint} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input type="tel" placeholder="+91 98765 43210" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ ...inputStyle, paddingLeft: 40 }} />
            </div>
          </div>

          <div style={{ marginBottom: 12 }}>
            <label style={{ fontFamily: body, fontSize: 11, color: T.faint, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 6 }}>Email</label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} color={T.faint} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} style={{ ...inputStyle, paddingLeft: 40 }} />
            </div>
          </div>

          <div style={{ marginBottom: 12 }}>
            <label style={{ fontFamily: body, fontSize: 11, color: T.faint, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 6 }}>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} color={T.faint} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input type="password" placeholder="Min 6 characters" value={password} onChange={(e) => setPassword(e.target.value)} style={{ ...inputStyle, paddingLeft: 40 }} />
            </div>
          </div>

          {role === 'donor' && (
            <div style={{ marginBottom: 12 }}>
              <label style={{ fontFamily: body, fontSize: 11, color: T.faint, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 6 }}>Blood group</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                {GROUPS.map((g) => (
                  <button key={g} type="button" onClick={() => setBloodGroup(g)} style={{
                    fontFamily: display, fontWeight: 800, fontSize: 15, padding: '10px 0', borderRadius: 10,
                    background: bloodGroup === g ? T.oxblood : T.card, color: bloodGroup === g ? '#fff' : T.mut,
                    border: `1px solid ${bloodGroup === g ? T.oxbloodDark : T.line}`, cursor: 'pointer',
                  }}>{g}</button>
                ))}
              </div>
            </div>
          )}

          <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontFamily: body, fontSize: 11, color: T.faint, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 6 }}>City</label>
              <div style={{ position: 'relative' }}>
                <MapPin size={16} color={T.faint} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
                <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} style={{ ...inputStyle, paddingLeft: 40 }} />
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontFamily: body, fontSize: 11, color: T.faint, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 6 }}>State</label>
              <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} style={inputStyle} />
            </div>
          </div>

          <Btn kind="primary" full disabled={loading}>{loading ? 'Creating account...' : 'Create account'}</Btn>
        </form>

        <p style={{ fontFamily: body, fontSize: 13, color: T.mut, textAlign: 'center', marginTop: 20 }}>
          Already have an account? <Link to="/login" style={{ color: T.oxblood, fontWeight: 700, textDecoration: 'none' }}>Sign in</Link>
        </p>
      </div>
    </div>
  );
}
