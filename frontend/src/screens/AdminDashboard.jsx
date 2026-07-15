import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Building2, Droplet, Award, BarChart3, ArrowLeft, LogOut } from 'lucide-react';
import { T } from '../theme.js';
import Card from '../components/Card.jsx';
import api from '../api/client.js';
import { useAuth } from '../hooks/useAuth.js';

const body = "'Public Sans', 'Segoe UI', system-ui, sans-serif";
const display = "'Anek Latin', 'Segoe UI', system-ui, sans-serif";

function asItems(payload, fallbackKey) {
  if (Array.isArray(payload?.items)) return payload.items;
  if (Array.isArray(payload?.[fallbackKey])) return payload[fallbackKey];
  if (Array.isArray(payload)) return payload;
  return [];
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [busyId, setBusyId] = useState('');
  const [tab, setTab] = useState('overview');

  const fetchData = useCallback(async () => {
    try {
      const [statsRes, usersRes, requestsRes] = await Promise.all([
        api.get('/admin/stats'),
        api.get('/admin/users', { params: { limit: 100 } }),
        api.get('/admin/requests', { params: { limit: 100 } }),
      ]);
      setStats(statsRes.data.data?.stats || statsRes.data.stats);
      setUsers(asItems(usersRes.data.data || usersRes.data, 'users'));
      setRequests(asItems(requestsRes.data.data || requestsRes.data, 'requests'));
      setError('');
    } catch (_err) {
      setError('Failed to load admin data');
      if (_err.response?.status === 403) {
        await logout();
        navigate('/login');
      }
    } finally {
      setLoading(false);
    }
  }, [logout, navigate]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const setHospitalApproval = async (hospitalId, status) => {
    setBusyId(hospitalId);
    setError('');
    try {
      await api.post(`/admin/hospitals/${hospitalId}/approval`, { status });
      await fetchData();
    } catch (_err) {
      setError(_err.response?.data?.error?.message || 'Hospital approval update failed');
    } finally {
      setBusyId('');
    }
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: body, color: T.mut, background: '#0A0506' }}>
        Loading admin dashboard...
      </div>
    );
  }

  const donors = users.filter((u) => u.role === 'donor');
  const hospitals = users.filter((u) => u.role === 'hospital');
  const pendingHospitals = hospitals.filter((h) => (h.approval_status || 'pending') === 'pending');
  const openRequests = requests.filter((r) => r.status === 'open');
  const filledRequests = requests.filter((r) => r.status === 'filled');

  return (
    <div className="app-shell app-shell--wide" style={{ minHeight: '100vh', background: '#0A0506', color: '#F8F1EF', margin: '0 auto', padding: '20px 24px 40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, gap: 12, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button type="button" onClick={() => navigate('/admin')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#C9B7B4' }} title="Admin home" aria-label="Admin home">
            <ArrowLeft size={20} />
          </button>
          <h1 style={{ fontFamily: display, fontWeight: 800, fontSize: 22, margin: 0, color: '#F8F1EF' }}>Admin Console</h1>
        </div>
        <button type="button" onClick={async () => { await logout(); navigate('/login'); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#E4506B', display: 'flex', alignItems: 'center', gap: 6, fontFamily: body, fontSize: 13 }}>
          <LogOut size={16} /> Sign out
        </button>
      </div>

      {error ? <p role="alert" style={{ fontFamily: body, fontSize: 13, color: '#E4506B', marginBottom: 16 }}>{error}</p> : null}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12, marginBottom: 24 }}>
        {[
          [Users, '#3DBD8A', 'Total Donors', stats?.total_donors || 0],
          [Building2, '#8FB4E8', 'Hospitals', stats?.total_hospitals || 0],
          [Droplet, '#E4506B', 'Active Requests', stats?.active_requests || 0],
          [Award, '#D9B45C', 'Credits Earned', stats?.total_credits_earned || 0],
        ].map(([Icon, color, label, value]) => (
          <Card key={label} dark style={{ background: '#16090C', borderColor: '#3A1A22' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Icon size={20} color={color} />
              <div>
                <p style={{ fontFamily: body, fontSize: 11, color: '#C9B7B4', margin: 0 }}>{label}</p>
                <p style={{ fontFamily: display, fontWeight: 800, fontSize: 28, margin: '2px 0 0', color: '#F8F1EF' }}>{value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16, borderBottom: '1px solid #3A1A22', paddingBottom: 12, flexWrap: 'wrap' }}>
        {[
          ['overview', 'Overview', BarChart3],
          ['pending', `Pending (${pendingHospitals.length})`, Building2],
          ['donors', `Donors (${donors.length})`, Users],
          ['hospitals', `Hospitals (${hospitals.length})`, Building2],
          ['requests', `Requests (${requests.length})`, Droplet],
        ].map(([k, label, Icon]) => (
          <button key={k} type="button" onClick={() => setTab(k)} style={{
            fontFamily: display, fontWeight: 700, fontSize: 13, padding: '8px 14px', borderRadius: 10, cursor: 'pointer',
            background: tab === k ? '#7A1626' : 'transparent', color: tab === k ? '#fff' : '#C9B7B4',
            border: 'none', display: 'flex', alignItems: 'center', gap: 6, minHeight: 44,
          }}>
            <Icon size={14} /> {label}
          </button>
        ))}
      </div>

      {tab === 'overview' && (
        <div>
          <p style={{ fontFamily: body, fontSize: 13, color: '#C9B7B4', marginBottom: 12 }}>
            Platform summary · {stats?.pending_hospitals || pendingHospitals.length} hospitals awaiting review · {stats?.total_donations || 0} verified donations
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12 }}>
            <div style={{ background: '#16090C', borderRadius: 12, padding: 14, border: '1px solid #3A1A22' }}>
              <p style={{ fontFamily: display, fontWeight: 800, fontSize: 24, margin: 0, color: '#E4506B' }}>{openRequests.length}</p>
              <p style={{ fontFamily: body, fontSize: 12, color: '#C9B7B4', margin: '4px 0 0' }}>Open requests</p>
            </div>
            <div style={{ background: '#16090C', borderRadius: 12, padding: 14, border: '1px solid #3A1A22' }}>
              <p style={{ fontFamily: display, fontWeight: 800, fontSize: 24, margin: 0, color: '#3DBD8A' }}>{filledRequests.length}</p>
              <p style={{ fontFamily: body, fontSize: 12, color: '#C9B7B4', margin: '4px 0 0' }}>Filled requests</p>
            </div>
            <div style={{ background: '#16090C', borderRadius: 12, padding: 14, border: '1px solid #3A1A22' }}>
              <p style={{ fontFamily: display, fontWeight: 800, fontSize: 24, margin: 0, color: '#D9B45C' }}>{pendingHospitals.length}</p>
              <p style={{ fontFamily: body, fontSize: 12, color: '#C9B7B4', margin: '4px 0 0' }}>Pending hospitals</p>
            </div>
          </div>
        </div>
      )}

      {tab === 'pending' && (
        <div>
          {pendingHospitals.length === 0 ? (
            <p style={{ color: '#C9B7B4' }}>No hospitals are waiting for approval.</p>
          ) : pendingHospitals.map((h) => (
            <Card key={h.id} dark style={{ marginBottom: 8, padding: 12, background: '#16090C', borderColor: '#3A1A22' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                <div>
                  <p style={{ fontFamily: display, fontWeight: 700, fontSize: 14, margin: 0, color: '#F8F1EF' }}>{h.name || h.hospital_name}</p>
                  <p style={{ fontFamily: body, fontSize: 12, color: '#C9B7B4', margin: '2px 0 0' }}>{h.phone} · {h.city} · license {h.license_number || 'n/a'}</p>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button type="button" disabled={busyId === h.hospital_id} onClick={() => setHospitalApproval(h.hospital_id, 'approved')} style={{ minHeight: 40, borderRadius: 10, border: 'none', background: '#0F6B4A', color: '#fff', padding: '0 12px', cursor: 'pointer' }}>Approve</button>
                  <button type="button" disabled={busyId === h.hospital_id} onClick={() => setHospitalApproval(h.hospital_id, 'rejected')} style={{ minHeight: 40, borderRadius: 10, border: '1px solid #7A1626', background: 'transparent', color: '#E4506B', padding: '0 12px', cursor: 'pointer' }}>Reject</button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {tab === 'donors' && (
        <div>
          {donors.map((d) => (
            <Card key={d.id} dark style={{ marginBottom: 8, padding: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#16090C', borderColor: '#3A1A22' }}>
              <div>
                <p style={{ fontFamily: display, fontWeight: 700, fontSize: 14, margin: 0, color: '#F8F1EF' }}>{d.name} · {d.blood_group}</p>
                <p style={{ fontFamily: body, fontSize: 12, color: '#C9B7B4', margin: '2px 0 0' }}>{d.phone} · {d.city} · {d.is_on_call ? 'On call' : 'Off call'}</p>
              </div>
              <span style={{ fontFamily: body, fontSize: 11, color: d.account_status === 'active' ? '#3DBD8A' : '#C9B7B4', padding: '4px 10px', borderRadius: 8, background: '#2B1218' }}>
                {d.account_status || 'active'}
              </span>
            </Card>
          ))}
        </div>
      )}

      {tab === 'hospitals' && (
        <div>
          {hospitals.map((h) => (
            <Card key={h.id} dark style={{ marginBottom: 8, padding: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap', background: '#16090C', borderColor: '#3A1A22' }}>
              <div>
                <p style={{ fontFamily: display, fontWeight: 700, fontSize: 14, margin: 0, color: '#F8F1EF' }}>{h.name || h.hospital_name}</p>
                <p style={{ fontFamily: body, fontSize: 12, color: '#C9B7B4', margin: '2px 0 0' }}>{h.phone} · {h.city} · {h.approval_status || 'pending'}</p>
              </div>
              {h.hospital_id && h.approval_status !== 'approved' ? (
                <button type="button" disabled={busyId === h.hospital_id} onClick={() => setHospitalApproval(h.hospital_id, 'approved')} style={{ minHeight: 40, borderRadius: 10, border: 'none', background: '#7A1626', color: '#fff', padding: '0 12px', cursor: 'pointer' }}>Approve</button>
              ) : (
                <span style={{ fontFamily: body, fontSize: 11, color: '#3DBD8A', padding: '4px 10px', borderRadius: 8, background: '#0F6B4A22' }}>{h.approval_status || 'approved'}</span>
              )}
            </Card>
          ))}
        </div>
      )}

      {tab === 'requests' && (
        <div>
          {requests.map((r) => (
            <Card key={r.id} dark style={{ marginBottom: 8, padding: 12, background: '#16090C', borderColor: '#3A1A22' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ fontFamily: display, fontWeight: 800, fontSize: 16, margin: 0, color: '#E4506B' }}>{r.blood_group} · {r.units_needed} units</p>
                  <p style={{ fontFamily: body, fontSize: 12, color: '#C9B7B4', margin: '3px 0 0' }}>{r.hospital_name || 'Hospital'} · Ref {r.ref_code} · {r.urgency} · {r.status}</p>
                </div>
                <span style={{ fontFamily: body, fontSize: 11, color: r.status === 'open' ? '#E4506B' : '#3DBD8A', padding: '4px 10px', borderRadius: 8, background: r.status === 'open' ? '#E4506B22' : '#0F6B4A22' }}>
                  {r.status}
                </span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
