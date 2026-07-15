import React, { useState } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { User, Phone, Mail, Lock, MapPin, Calendar } from 'lucide-react';
import { T, GROUPS } from '../theme.js';
import Btn from '../components/Btn.jsx';
import { useAuth } from '../hooks/useAuth.js';
import { roleHome, parseAuthRole } from '../lib/roleHome.js';
import usePageMeta from '../hooks/usePageMeta.js';

const body = "'Public Sans', 'Segoe UI', system-ui, sans-serif";
const display = "'Anek Latin', 'Segoe UI', system-ui, sans-serif";

export default function Register() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = parseAuthRole(searchParams);
  const isHospital = role === 'hospital';
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bloodGroup, setBloodGroup] = useState('O+');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [consentGiven, setConsentGiven] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  usePageMeta({
    title: isHospital ? 'Register a Hospital | RaktaSetu' : 'Create a Donor Account | RaktaSetu',
    description: isHospital
      ? 'Register a hospital or blood bank to coordinate blood requests through RaktaSetu.'
      : 'Create a RaktaSetu donor account and choose when you are available for compatible requests.',
    path: '/register',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!name || !phone || !email || !password || !city || !state || (!isHospital && !dob)) {
      setError('Please fill all required fields');
      return;
    }
    if (isHospital && (!address || !licenseNumber)) {
      setError('Hospital address and license number are required');
      return;
    }
    if (role === 'donor' && !bloodGroup) {
      setError('Please select your blood group');
      return;
    }
    if (!isHospital) {
      const today = new Date();
      const birthDate = new Date(dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
      if (age < 18) {
        setError('You must be at least 18 years old to register');
        return;
      }
    }
    if (!consentGiven) {
      setError('You must consent to processing your personal and health data');
      return;
    }
    setLoading(true);
    try {
      const payload = {
        name, phone, email, password, role, city, state,
        blood_group: isHospital ? undefined : bloodGroup,
        date_of_birth: isHospital ? undefined : dob,
        hospital_name: isHospital ? name : undefined,
        address: isHospital ? address : undefined,
        license_number: isHospital ? licenseNumber : undefined,
        consent_given: true,
        consent_policy_version: '2026-07-15',
      };
      const result = await register(payload);
      if (result.status === 'pending_approval') navigate('/hospital-pending');
      else navigate(roleHome(result.user));
    } catch (_err) {
      setError(_err.response?.data?.error?.message || _err.response?.data?.error || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 14px',
    borderRadius: 12,
    border: `1px solid ${T.line}`,
    fontFamily: body,
    fontSize: 16,
    background: T.card,
    minHeight: 48,
  };

  return (
    <div
      className="safe-top safe-bottom"
      style={{
        minHeight: '100dvh',
        padding: 'max(24px, env(safe-area-inset-top)) 20px max(40px, env(safe-area-inset-bottom))',
        background: T.porcelain,
      }}
    >
      <div style={{ maxWidth: 360, margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
          marginBottom: 16,
          minHeight: 44,
        }}>
          <Link to="/" style={{
            fontFamily: body, fontSize: 13, color: T.mut, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', minHeight: 44,
          }}>
            ← RaktaSetu
          </Link>
          {!isHospital ? (
            <Link
              to="/register?role=hospital"
              style={{
                fontFamily: body,
                fontSize: 12,
                color: T.faint,
                textDecoration: 'underline',
                textUnderlineOffset: 3,
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: 44,
                whiteSpace: 'nowrap',
              }}
            >
              Hospital registration
            </Link>
          ) : (
            <Link
              to="/register"
              style={{
                fontFamily: body,
                fontSize: 12,
                color: T.mut,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: 44,
              }}
            >
              Donor registration
            </Link>
          )}
        </div>

        <h1 style={{ fontFamily: display, fontWeight: 800, fontSize: 22, color: T.ink, margin: '0 0 4px' }}>
          {isHospital ? 'Register hospital' : 'Create donor account'}
        </h1>
        <p style={{ fontFamily: body, fontSize: 13, color: T.mut, margin: '0 0 20px' }}>
          {isHospital
            ? 'Join RaktaSetu as a blood bank or hospital'
            : 'Join the living bridge and respond when nearby patients need you'}
        </p>

        <form onSubmit={handleSubmit}>
          {error && (
            <div style={{
              background: T.arterialSoft, border: '1px solid #F3C9D0', borderRadius: 10,
              padding: '10px 14px', marginBottom: 14, fontFamily: body, fontSize: 13, color: T.arterial,
            }} role="alert">
              {error}
            </div>
          )}

          <div style={{ marginBottom: 12 }}>
            <label style={{ fontFamily: body, fontSize: 11, color: T.faint, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 6 }}>
              {isHospital ? 'Hospital / blood bank name' : 'Full name'}
            </label>
            <div style={{ position: 'relative' }}>
              <User size={16} color={T.faint} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input type="text" aria-label={isHospital ? 'Hospital or blood bank name' : 'Full name'} required placeholder={isHospital ? 'Hospital name' : 'Your full name'} value={name} onChange={(e) => setName(e.target.value)} style={{ ...inputStyle, paddingLeft: 40 }} />
            </div>
          </div>

          <div style={{ marginBottom: 12 }}>
            <label style={{ fontFamily: body, fontSize: 11, color: T.faint, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 6 }}>Phone</label>
            <div style={{ position: 'relative' }}>
              <Phone size={16} color={T.faint} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input type="tel" aria-label="Phone" required autoComplete="tel" placeholder="+91 98765 43210" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ ...inputStyle, paddingLeft: 40 }} />
            </div>
          </div>

          <div style={{ marginBottom: 12 }}>
            <label style={{ fontFamily: body, fontSize: 11, color: T.faint, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 6 }}>Email</label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} color={T.faint} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input type="email" aria-label="Email" required autoComplete="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} style={{ ...inputStyle, paddingLeft: 40 }} />
            </div>
          </div>

          <div style={{ marginBottom: 12 }}>
            <label style={{ fontFamily: body, fontSize: 11, color: T.faint, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 6 }}>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} color={T.faint} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input type="password" aria-label="Password" required autoComplete="new-password" placeholder="Min 8 characters with uppercase, lowercase, number, symbol" value={password} onChange={(e) => setPassword(e.target.value)} style={{ ...inputStyle, paddingLeft: 40 }} />
            </div>
          </div>

          {!isHospital ? (
            <div style={{ marginBottom: 12 }}>
              <label style={{ fontFamily: body, fontSize: 11, color: T.faint, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 6 }}>Date of birth</label>
              <div style={{ position: 'relative' }}>
                <Calendar size={16} color={T.faint} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
                <input type="date" aria-label="Date of birth" required value={dob} onChange={(e) => setDob(e.target.value)} style={{ ...inputStyle, paddingLeft: 40 }} />
              </div>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: 12 }}>
                <label style={{ fontFamily: body, fontSize: 11, color: T.faint, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 6 }}>License number</label>
                <input type="text" aria-label="License number" required value={licenseNumber} onChange={(e) => setLicenseNumber(e.target.value)} style={inputStyle} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label style={{ fontFamily: body, fontSize: 11, color: T.faint, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 6 }}>Hospital address</label>
                <textarea aria-label="Hospital address" required value={address} onChange={(e) => setAddress(e.target.value)} style={{ ...inputStyle, minHeight: 88, resize: 'vertical' }} />
              </div>
            </>
          )}

          {!isHospital && (
            <div style={{ marginBottom: 12 }}>
              <label style={{ fontFamily: body, fontSize: 11, color: T.faint, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 6 }}>Blood group</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                {GROUPS.map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setBloodGroup(g)}
                    style={{
                      fontFamily: display, fontWeight: 800, fontSize: 15, padding: '12px 0',
                      minHeight: 44, borderRadius: 10,
                      background: bloodGroup === g ? T.oxblood : T.card,
                      color: bloodGroup === g ? '#fff' : T.mut,
                      border: `1px solid ${bloodGroup === g ? T.oxbloodDark : T.line}`,
                      cursor: 'pointer',
                    }}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontFamily: body, fontSize: 11, color: T.faint, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 6 }}>City</label>
              <div style={{ position: 'relative' }}>
                <MapPin size={16} color={T.faint} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
                <input type="text" aria-label="City" required autoComplete="address-level2" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} style={{ ...inputStyle, paddingLeft: 40 }} />
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontFamily: body, fontSize: 11, color: T.faint, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 6 }}>State</label>
              <input type="text" aria-label="State" required autoComplete="address-level1" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} style={inputStyle} />
            </div>
          </div>

          <div style={{ marginBottom: 14, display: 'flex', alignItems: 'flex-start', gap: 10, minHeight: 44 }}>
            <input
              type="checkbox"
              id="consent"
              checked={consentGiven}
              onChange={(e) => setConsentGiven(e.target.checked)}
              style={{ marginTop: 3, accentColor: T.oxblood, width: 18, height: 18, flexShrink: 0 }}
            />
            <label htmlFor="consent" style={{ fontFamily: body, fontSize: 13, color: T.ink, lineHeight: 1.4 }}>
              I have read the <Link to="/privacy" style={{ color: T.oxblood }}>Privacy Policy</Link> and
              agree to the <Link to="/terms" style={{ color: T.oxblood }}>Terms of Service</Link>. I consent
              to RaktaSetu using my account, blood group, location, and donation activity to provide
              matching and coordination features.
            </label>
          </div>

          <Btn kind="primary" full disabled={loading}>
            {loading ? 'Creating account...' : isHospital ? 'Register hospital' : 'Create donor account'}
          </Btn>
        </form>

        <p style={{ fontFamily: body, fontSize: 13, color: T.mut, textAlign: 'center', marginTop: 20 }}>
          Already have an account?{' '}
          <Link
            to={isHospital ? '/login?role=hospital' : '/login'}
            style={{ color: T.oxblood, fontWeight: 700, textDecoration: 'none' }}
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
