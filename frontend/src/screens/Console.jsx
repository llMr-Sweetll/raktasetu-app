import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { T } from '../theme.js';
import Logo from '../components/Logo.jsx';
import Chip from '../components/Chip.jsx';
import Card from '../components/Card.jsx';
import api from '../api/client.js';
import { useAuth } from '../hooks/useAuth.js';

const body = "'Public Sans', 'Segoe UI', system-ui, sans-serif";
const display = "'Anek Latin', 'Segoe UI', system-ui, sans-serif";

export default function Console() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const [tab, setTab] = useState('board');
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const path = location.pathname;
    if (path.includes('/new-request')) setTab('new');
    else if (path.includes('/verify')) setTab('verify');
    else setTab('board');
  }, [location]);

  useEffect(() => {
    fetchDashboard();
    const interval = setInterval(fetchDashboard, 15000);
    return () => clearInterval(interval);
  }, []);

  const fetchDashboard = async () => {
    try {
      const { data: response } = await api.get('/hospital/dashboard');
      const payload = response.data || response;
      setRequests(payload.requests || []);
    } catch (err) {
      setError('Failed to load live board');
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    ['board', '/console', 'Live board'],
    ['new', '/console/new-request', 'New request'],
    ['verify', '/console/verify', 'Verify donor'],
  ];

  return (
    <div style={{ minHeight: '100vh', background: T.consoleBg, color: '#F0EEE9', maxWidth: 430, margin: '0 auto', position: 'relative' }}>
      <div style={{ padding: '10px 16px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo size={22} dark />
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontFamily: body, fontSize: 12, color: T.consoleMut, margin: 0 }}>{user?.name || 'Hospital'}</p>
          <p style={{ fontFamily: body, fontSize: 10.5, color: '#5C6270', margin: 0 }}>Blood bank console</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 6, padding: '12px 16px 0' }}>
        {tabs.map(([k, path, label]) => (
          <button key={k} onClick={() => navigate(path)} style={{
            fontFamily: display, fontWeight: 700, fontSize: 12, padding: '7px 12px', borderRadius: 99, cursor: 'pointer',
            background: tab === k ? '#F0EEE9' : 'transparent', color: tab === k ? T.ink : T.consoleMut,
            border: `1px solid ${tab === k ? '#F0EEE9' : T.consoleLine}`,
          }}>
            {label}
          </button>
        ))}
      </div>

      {tab === 'board' && (
        <div style={{ padding: '16px 16px 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <p style={{ fontFamily: body, fontSize: 12, color: T.consoleMut, margin: 0 }}>Live board · {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            <Chip tone="green" dark>Bank verified</Chip>
          </div>

          {loading ? (
            <p style={{ fontFamily: body, fontSize: 13, color: T.consoleMut, textAlign: 'center' }}>Loading...</p>
          ) : error ? (
            <p style={{ fontFamily: body, fontSize: 13, color: '#E4506B', textAlign: 'center' }}>{error}</p>
          ) : requests.length === 0 ? (
            <Card dark>
              <p style={{ fontFamily: body, fontSize: 13, color: T.consoleMut, margin: 0, textAlign: 'center' }}>No active requests. Create a new request to find donors.</p>
            </Card>
          ) : (
            requests.map((req) => (
              <Card key={req.id} dark style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <span style={{ fontFamily: display, fontWeight: 800, fontSize: 26, color: '#E4506B' }}>{req.blood_group}</span>
                    <div>
                      <p style={{ fontFamily: display, fontWeight: 700, fontSize: 14, margin: 0, color: '#F0EEE9' }}>{req.units_needed} units · ref {req.ref_code}</p>
                      <p style={{ fontFamily: body, fontSize: 11.5, color: T.consoleMut, margin: '2px 0 0' }}>
                        Broadcast {new Date(req.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} · {req.radius_km} km radius
                      </p>
                    </div>
                  </div>
                  <Chip tone={req.urgency === 'critical' ? 'red' : req.urgency === 'urgent' ? 'gold' : 'line'} dark>{req.urgency}</Chip>
                </div>
                <div style={{ height: 6, borderRadius: 99, background: T.consoleLine, margin: '14px 0 8px', overflow: 'hidden' }}>
                  <div style={{ width: `${Math.min(100, (req.filled_units / req.units_needed) * 100)}%`, height: '100%', background: '#E4506B' }} />
                </div>
                <div style={{ display: 'flex', gap: 14 }}>
                  {[
                    [req.donors_pinged || '0', 'pinged'],
                    [req.accepted_count || '0', 'accepted'],
                    [req.arrived_count || '0', 'arrived'],
                    [`${req.filled_units || 0} / ${req.units_needed}`, 'collected'],
                  ].map(([n, l]) => (
                    <div key={l}>
                      <p style={{ fontFamily: display, fontWeight: 800, fontSize: 15, margin: 0, color: '#F0EEE9' }}>{n}</p>
                      <p style={{ fontFamily: body, fontSize: 10.5, color: T.consoleMut, margin: 0, textTransform: 'uppercase', letterSpacing: '.05em' }}>{l}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))
          )}

          <div style={{ marginTop: 16, textAlign: 'center' }}>
            <button onClick={logout} style={{ fontFamily: body, fontSize: 13, color: '#E4506B', background: 'none', border: 'none', cursor: 'pointer' }}>
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
