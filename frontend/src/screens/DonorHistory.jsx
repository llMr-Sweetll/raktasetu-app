import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { T } from '../theme.js';
import Card from '../components/Card.jsx';
import BottomNav from '../components/BottomNav.jsx';
import api from '../api/client.js';

const body = "'Public Sans', 'Segoe UI', system-ui, sans-serif";
const display = "'Anek Latin', 'Segoe UI', system-ui, sans-serif";

export default function DonorHistory() {
  const navigate = useNavigate();
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const { data: response } = await api.get('/donor/history');
      const payload = response.data || response;
      setDonations(payload.donations || []);
    } catch (err) {
      setError('Failed to load donation history');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: body }}>Loading...</div>;

  return (
    <div style={{ padding: '18px 18px 90px', maxWidth: 430, margin: '0 auto' }}>
      <button onClick={() => navigate('/profile')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16, fontFamily: body, fontSize: 13, color: T.mut }}>
        <ArrowLeft size={16} /> Back to profile
      </button>

      <h2 style={{ fontFamily: display, fontWeight: 800, fontSize: 22, margin: 0, color: T.ink }}>Donation history</h2>
      <p style={{ fontFamily: body, fontSize: 13, color: T.mut, margin: '4px 0 14px' }}>Your verified donations and earned credits</p>

      {error && <p style={{ fontFamily: body, fontSize: 12, color: T.arterial }}>{error}</p>}

      {donations.length === 0 ? (
        <Card>
          <p style={{ fontFamily: body, fontSize: 13, color: T.mut, margin: 0, textAlign: 'center' }}>No donations recorded yet. Accept a request to start saving lives!</p>
        </Card>
      ) : (
        donations.map((d) => (
          <Card key={d.id} style={{ marginBottom: 10, padding: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <p style={{ fontFamily: display, fontWeight: 700, fontSize: 14, margin: 0, color: T.ink }}>{d.hospital_name || 'Unknown hospital'}</p>
                <p style={{ fontFamily: body, fontSize: 12, color: T.mut, margin: '2px 0 0' }}>{d.blood_group} · {d.units} unit{d.units > 1 ? 's' : ''}</p>
                <p style={{ fontFamily: body, fontSize: 11.5, color: T.faint, margin: '4px 0 0' }}>Verified on {new Date(d.verified_at).toLocaleDateString()}</p>
              </div>
              <span style={{ fontFamily: display, fontWeight: 800, fontSize: 14, color: T.leaf }}>+{d.credits_earned}</span>
            </div>
          </Card>
        ))
      )}

      <BottomNav />
    </div>
  );
}
