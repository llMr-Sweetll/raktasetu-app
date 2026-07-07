import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Building2, Droplet, Award, BarChart3, ArrowLeft, LogOut } from 'lucide-react';
import { T } from '../App.jsx';
import Card from '../components/Card.jsx';
import api from '../api/client.js';
import { useAuth } from '../hooks/useAuth.js';

const body = "'Public Sans', 'Segoe UI', system-ui, sans-serif";
const display = "'Anek Latin', 'Segoe UI', system-ui, sans-serif";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [tab, setTab] = useState('overview');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [statsRes, usersRes, requestsRes] = await Promise.all([
        api.get('/admin/stats'),
        api.get('/admin/users'),
        api.get('/admin/requests'),
      ]);
      setStats(statsRes.data.data?.stats || statsRes.data.stats);
      setUsers(usersRes.data.data?.users || usersRes.data.users || []);
      setRequests(requestsRes.data.data?.requests || requestsRes.data.requests || []);
    } catch (err) {
      setError('Failed to load admin data');
      if (err.response?.status === 403) {
        logout();
        navigate('/login');
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: body, color: T.mut }}>
      Loading admin dashboard...
    </div>
  );

  const donors = users.filter(u => u.role === 'donor');
  const hospitals = users.filter(u => u.role === 'hospital');
  const openRequests = requests.filter(r => r.status === 'open');
  const filledRequests = requests.filter(r => r.status === 'filled');

  return (
    <div style={{ minHeight: '100vh', background: '#0F1115', color: '#F0EEE9', maxWidth: 900, margin: '0 auto', padding: '20px 24px 40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8B909C' }}>
            <ArrowLeft size={20} />
          </button>
          <h1 style={{ fontFamily: display, fontWeight: 800, fontSize: 22, margin: 0, color: '#F0EEE9' }}>Admin Console</h1>
        </div>
        <button onClick={logout} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#E4506B', display: 'flex', alignItems: 'center', gap: 6, fontFamily: body, fontSize: 13 }}>
          <LogOut size={16} /> Sign out
        </button>
      </div>

      {error && <p style={{ fontFamily: body, fontSize: 13, color: '#E4506B', marginBottom: 16 }}>{error}</p>}

      {/* Stats cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 24 }}>
        <Card dark style={{ background: '#1D2028', borderColor: '#2B2F3A' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Users size={20} color="#3DBD8A" />
            <div>
              <p style={{ fontFamily: body, fontSize: 11, color: '#8B909C', margin: 0 }}>Total Donors</p>
              <p style={{ fontFamily: display, fontWeight: 800, fontSize: 28, margin: '2px 0 0', color: '#F0EEE9' }}>{stats?.total_donors || 0}</p>
            </div>
          </div>
        </Card>
        <Card dark style={{ background: '#1D2028', borderColor: '#2B2F3A' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Building2 size={20} color="#8FB4E8" />
            <div>
              <p style={{ fontFamily: body, fontSize: 11, color: '#8B909C', margin: 0 }}>Hospitals</p>
              <p style={{ fontFamily: display, fontWeight: 800, fontSize: 28, margin: '2px 0 0', color: '#F0EEE9' }}>{stats?.total_hospitals || 0}</p>
            </div>
          </div>
        </Card>
        <Card dark style={{ background: '#1D2028', borderColor: '#2B2F3A' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Droplet size={20} color="#E4506B" />
            <div>
              <p style={{ fontFamily: body, fontSize: 11, color: '#8B909C', margin: 0 }}>Active Requests</p>
              <p style={{ fontFamily: display, fontWeight: 800, fontSize: 28, margin: '2px 0 0', color: '#F0EEE9' }}>{stats?.active_requests || 0}</p>
            </div>
          </div>
        </Card>
        <Card dark style={{ background: '#1D2028', borderColor: '#2B2F3A' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Award size={20} color="#D9B45C" />
            <div>
              <p style={{ fontFamily: body, fontSize: 11, color: '#8B909C', margin: 0 }}>Credits Earned</p>
              <p style={{ fontFamily: display, fontWeight: 800, fontSize: 28, margin: '2px 0 0', color: '#F0EEE9' }}>{stats?.total_credits_earned || 0}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 16, borderBottom: '1px solid #2B2F3A', paddingBottom: 12 }}>
        {[
          ['overview', 'Overview', BarChart3],
          ['donors', `Donors (${donors.length})`, Users],
          ['hospitals', `Hospitals (${hospitals.length})`, Building2],
          ['requests', `Requests (${requests.length})`, Droplet],
        ].map(([k, label, Icon]) => (
          <button key={k} onClick={() => setTab(k)} style={{
            fontFamily: display, fontWeight: 700, fontSize: 13, padding: '8px 14px', borderRadius: 10, cursor: 'pointer',
            background: tab === k ? '#F0EEE9' : 'transparent', color: tab === k ? '#17151A' : '#8B909C',
            border: 'none', display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <Icon size={14} /> {label}
          </button>
        ))}
      </div>

      {tab === 'overview' && (
        <div>
          <p style={{ fontFamily: body, fontSize: 13, color: '#8B909C', marginBottom: 12 }}>
            Platform summary · {requests.length} total requests · {stats?.total_donations || 0} verified donations
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            <div style={{ background: '#1D2028', borderRadius: 12, padding: 14, border: '1px solid #2B2F3A' }}>
              <p style={{ fontFamily: display, fontWeight: 800, fontSize: 24, margin: 0, color: '#E4506B' }}>{openRequests.length}</p>
              <p style={{ fontFamily: body, fontSize: 12, color: '#8B909C', margin: '4px 0 0' }}>Open requests</p>
            </div>
            <div style={{ background: '#1D2028', borderRadius: 12, padding: 14, border: '1px solid #2B2F3A' }}>
              <p style={{ fontFamily: display, fontWeight: 800, fontSize: 24, margin: 0, color: '#3DBD8A' }}>{filledRequests.length}</p>
              <p style={{ fontFamily: body, fontSize: 12, color: '#8B909C', margin: '4px 0 0' }}>Filled requests</p>
            </div>
            <div style={{ background: '#1D2028', borderRadius: 12, padding: 14, border: '1px solid #2B2F3A' }}>
              <p style={{ fontFamily: display, fontWeight: 800, fontSize: 24, margin: 0, color: '#D9B45C' }}>{users.length}</p>
              <p style={{ fontFamily: body, fontSize: 12, color: '#8B909C', margin: '4px 0 0' }}>Total users</p>
            </div>
          </div>
        </div>
      )}

      {tab === 'donors' && (
        <div>
          {donors.map(d => (
            <Card key={d.id} dark style={{ marginBottom: 8, padding: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ fontFamily: display, fontWeight: 700, fontSize: 14, margin: 0, color: '#F0EEE9' }}>{d.name} · {d.blood_group}</p>
                <p style={{ fontFamily: body, fontSize: 12, color: '#8B909C', margin: '2px 0 0' }}>{d.phone} · {d.city} · {d.is_on_call ? 'On call' : 'Off call'}</p>
              </div>
              <span style={{ fontFamily: body, fontSize: 11, color: d.is_verified ? '#3DBD8A' : '#8B909C', padding: '4px 10px', borderRadius: 8, background: d.is_verified ? '#0F6B4A22' : '#2B2F3A' }}>
                {d.is_verified ? 'Verified' : 'Pending'}
              </span>
            </Card>
          ))}
        </div>
      )}

      {tab === 'hospitals' && (
        <div>
          {hospitals.map(h => (
            <Card key={h.id} dark style={{ marginBottom: 8, padding: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ fontFamily: display, fontWeight: 700, fontSize: 14, margin: 0, color: '#F0EEE9' }}>{h.name}</p>
                <p style={{ fontFamily: body, fontSize: 12, color: '#8B909C', margin: '2px 0 0' }}>{h.phone} · {h.city}</p>
              </div>
              <span style={{ fontFamily: body, fontSize: 11, color: h.is_verified ? '#3DBD8A' : '#8B909C', padding: '4px 10px', borderRadius: 8, background: h.is_verified ? '#0F6B4A22' : '#2B2F3A' }}>
                {h.is_verified ? 'Verified' : 'Pending'}
              </span>
            </Card>
          ))}
        </div>
      )}

      {tab === 'requests' && (
        <div>
          {requests.map(r => (
            <Card key={r.id} dark style={{ marginBottom: 8, padding: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ fontFamily: display, fontWeight: 800, fontSize: 16, margin: 0, color: '#E4506B' }}>{r.blood_group} · {r.units_needed} units</p>
                  <p style={{ fontFamily: body, fontSize: 12, color: '#8B909C', margin: '3px 0 0' }}>Ref: {r.ref_code} · {r.urgency} · {r.status}</p>
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
