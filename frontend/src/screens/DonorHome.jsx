import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Droplet, CheckCircle2, ChevronRight } from 'lucide-react';
import { T } from '../theme.js';
import Logo from '../components/Logo.jsx';
import Chip from '../components/Chip.jsx';
import Card from '../components/Card.jsx';
import BottomNav from '../components/BottomNav.jsx';
import api from '../api/client.js';
import { useAuth } from '../hooks/useAuth.js';
import { useSocket } from '../hooks/useSocket.js';

const body = "'Public Sans', 'Segoe UI', system-ui, sans-serif";
const display = "'Anek Latin', 'Segoe UI', system-ui, sans-serif";

export default function DonorHome() {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();
  const [onCall, setOnCall] = useState(user?.is_on_call || false);
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [toggleLoading, setToggleLoading] = useState(false);
  const [lang, setLang] = useState('English');
  const navigateRef = useRef(navigate);
  navigateRef.current = navigate;

  const fetchDashboard = async () => {
    try {
      const { data: response } = await api.get('/donor/dashboard');
      const payload = response.data || response;
      setDashboard(payload);
      setOnCall(payload.is_on_call);
      updateUser({ is_on_call: payload.is_on_call });
    } catch (_err) {
      setError('Failed to load dashboard');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  useSocket({
    blood_request: (payload) => {
      if (payload?.request_id) {
        navigateRef.current(`/alert/${payload.request_id}`);
      }
    },
  });

  const toggleOnCall = async () => {
    setToggleLoading(true);
    try {
      const { data: response } = await api.patch('/donor/on-call', { is_on_call: !onCall });
      const payload = response.data || response;
      setOnCall(payload.is_on_call);
      updateUser({ is_on_call: payload.is_on_call });
    } catch (_err) {
      setError('Failed to update status');
    } finally {
      setToggleLoading(false);
    }
  };

  if (loading) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: body, color: T.mut }}>
      Loading dashboard...
    </div>
  );

  const name = user?.name || 'Donor';
  const blood = user?.blood_group || 'Not set';
  const credits = dashboard?.credits ?? 0;
  const eligible = dashboard?.eligible ?? true;
  const nextEligible = dashboard?.next_eligible_date;
  const radius = user?.ping_radius_km || 10;
  const requests = dashboard?.nearby_requests || [];

  return (
    <div style={{ padding: '18px 18px calc(90px + env(safe-area-inset-bottom))', maxWidth: 430, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo />
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button onClick={() => setLang(l => l === 'English' ? 'ಕನ್ನಡ' : 'English')}>
            <Chip tone="gold">{lang === 'English' ? 'English · EN' : 'ಕನ್ನಡ · KN'}</Chip>
          </button>
          <button onClick={() => navigate('/requests')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <Bell size={19} color={T.mut} />
          </button>
        </div>
      </div>

      <p style={{ fontFamily: body, color: T.mut, fontSize: 13.5, margin: '20px 0 2px' }}>Namaskara, {name}</p>
      <h1 style={{ fontFamily: display, fontWeight: 800, fontSize: 26, margin: 0, color: T.ink, letterSpacing: '-0.02em' }}>
        {onCall ? `You're on call for ${user?.city || 'your city'}.` : 'Ready when you are.'}
      </h1>

      {/* Signature on-call drop toggle */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '26px 0 8px' }}>
        <div style={{ position: 'relative', width: 148, height: 148 }}>
          {onCall && (<>
            <span className="rs-pulse" style={{ animationDelay: '0s' }} />
            <span className="rs-pulse" style={{ animationDelay: '1.1s' }} />
          </>)}
          <button
            onClick={toggleOnCall}
            disabled={toggleLoading}
            aria-pressed={onCall}
            style={{
              position: 'absolute', inset: 8, borderRadius: '50%',
              background: onCall ? T.oxblood : '#fff',
              border: `2px solid ${onCall ? T.oxbloodDark : T.line}`,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', gap: 4, transition: 'background .25s ease',
              boxShadow: onCall ? '0 8px 24px rgba(122,22,38,.35)' : '0 4px 14px rgba(23,21,26,.08)',
            }}
          >
            <Droplet size={40} color={onCall ? '#fff' : T.oxblood} fill={onCall ? '#fff' : 'none'} strokeWidth={1.7} />
            <span style={{ fontFamily: display, fontWeight: 800, fontSize: 13, color: onCall ? '#fff' : T.ink, letterSpacing: '0.06em' }}>
              {onCall ? 'ON CALL' : 'OFF'}
            </span>
          </button>
        </div>
        <p style={{ fontFamily: body, fontSize: 12.5, color: T.faint, marginTop: 10, textAlign: 'center', maxWidth: 250 }}>
          {onCall ? `Blood banks can ping you for ${blood} compatible emergencies within ${radius} km.` : 'Turn on to receive emergency pings from verified blood banks.'}
        </p>
      </div>

      {/* Stats row */}
      <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
        <Card style={{ flex: 1, padding: 12 }}>
          <p style={{ fontFamily: body, fontSize: 11, color: T.faint, margin: 0, textTransform: 'uppercase', letterSpacing: '.05em' }}>Your group</p>
          <p style={{ fontFamily: display, fontWeight: 800, fontSize: 22, margin: '2px 0 0', color: T.oxblood }}>{blood}</p>
        </Card>
        <Card style={{ flex: 1, padding: 12 }}>
          <p style={{ fontFamily: body, fontSize: 11, color: T.faint, margin: 0, textTransform: 'uppercase', letterSpacing: '.05em' }}>Credits</p>
          <p style={{ fontFamily: display, fontWeight: 800, fontSize: 22, margin: '2px 0 0', color: T.ink }}>{credits}</p>
        </Card>
        <Card style={{ flex: 1.2, padding: 12 }}>
          <p style={{ fontFamily: body, fontSize: 11, color: T.faint, margin: 0, textTransform: 'uppercase', letterSpacing: '.05em' }}>Eligibility</p>
          <p style={{ fontFamily: display, fontWeight: 700, fontSize: 14, margin: '5px 0 0', color: eligible ? T.leaf : T.arterial, display: 'flex', alignItems: 'center', gap: 5 }}>
            <CheckCircle2 size={15} /> {eligible ? 'Eligible now' : nextEligible ? `Eligible ${nextEligible}` : 'Not eligible'}
          </p>
        </Card>
      </div>

      {/* Active requests */}
      {requests.length > 0 ? (
        requests.slice(0, 2).map((req) => (
          <Card key={req.id} style={{ marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }} onClick={() => navigate(`/alert/${req.id}`)}>
            <div>
              <p style={{ fontFamily: display, fontWeight: 700, fontSize: 14.5, margin: 0, color: T.ink }}>{req.hospital_name} · {req.units_needed} units needed</p>
              <p style={{ fontFamily: body, fontSize: 12.5, color: T.mut, margin: '3px 0 0' }}>{req.city} · {req.distance_km?.toFixed(1)} km away</p>
            </div>
            <ChevronRight size={18} color={T.faint} />
          </Card>
        ))
      ) : (
        <Card style={{ marginTop: 12 }}>
          <p style={{ fontFamily: body, fontSize: 13, color: T.mut, margin: 0, textAlign: 'center' }}>No active requests near you right now.</p>
        </Card>
      )}

      {error && (
        <p style={{ fontFamily: body, fontSize: 12, color: T.arterial, textAlign: 'center', marginTop: 12 }}>{error}</p>
      )}

      <BottomNav />
    </div>
  );
}
