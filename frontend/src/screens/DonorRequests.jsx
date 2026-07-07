import React, { useState, useEffect } from 'react';
import { Map as MapIcon, List, ChevronRight, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { T } from '../App.jsx';
import Card from '../components/Card.jsx';
import BottomNav from '../components/BottomNav.jsx';
import api from '../api/client.js';

const body = "'Public Sans', 'Segoe UI', system-ui, sans-serif";
const display = "'Anek Latin', 'Segoe UI', system-ui, sans-serif";

export default function DonorRequests() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [view, setView] = useState('list');

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const { data } = await api.get('/donor/requests');
      setRequests(data.requests || []);
    } catch (err) {
      setError('Failed to load requests');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: body }}>Loading...</div>;

  return (
    <div style={{ padding: '18px 18px 90px', maxWidth: 430, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontFamily: display, fontWeight: 800, fontSize: 22, margin: 0, color: T.ink }}>Nearby requests</h2>
        <div style={{ display: 'flex', gap: 6, background: T.card, border: `1px solid ${T.line}`, borderRadius: 10, padding: 3 }}>
          <button onClick={() => setView('list')} style={{
            padding: '6px 10px', borderRadius: 8, border: 'none', cursor: 'pointer',
            background: view === 'list' ? T.oxblood : 'transparent', color: view === 'list' ? '#fff' : T.mut,
            display: 'flex', alignItems: 'center', gap: 4, fontFamily: body, fontSize: 12, fontWeight: 600,
          }}><List size={14} /> List</button>
          <button onClick={() => setView('map')} style={{
            padding: '6px 10px', borderRadius: 8, border: 'none', cursor: 'pointer',
            background: view === 'map' ? T.oxblood : 'transparent', color: view === 'map' ? '#fff' : T.mut,
            display: 'flex', alignItems: 'center', gap: 4, fontFamily: body, fontSize: 12, fontWeight: 600,
          }}><MapIcon size={14} /> Map</button>
        </div>
      </div>

      <p style={{ fontFamily: body, fontSize: 13, color: T.mut, margin: '4px 0 14px' }}>Active blood requests near your location</p>

      {error && <p style={{ fontFamily: body, fontSize: 12, color: T.arterial }}>{error}</p>}

      {requests.length === 0 ? (
        <Card>
          <p style={{ fontFamily: body, fontSize: 13, color: T.mut, margin: 0, textAlign: 'center' }}>No active requests near you. Turn on your on-call toggle to get notified!</p>
        </Card>
      ) : (
        requests.map((req) => (
          <Card key={req.id} style={{ marginBottom: 10, cursor: 'pointer' }} onClick={() => navigate(`/alert/${req.id}`)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontFamily: display, fontWeight: 800, fontSize: 22, color: T.arterial }}>{req.blood_group}</span>
                  <span style={{ fontFamily: body, fontSize: 11, color: req.urgency === 'Critical' ? T.arterial : req.urgency === 'Urgent' ? T.gold : T.mut, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {req.urgency}
                  </span>
                </div>
                <p style={{ fontFamily: display, fontWeight: 700, fontSize: 14, margin: 0, color: T.ink }}>{req.hospital_name}</p>
                <p style={{ fontFamily: body, fontSize: 12, color: T.mut, margin: '2px 0 0' }}>{req.address} · {req.distance_km?.toFixed(1)} km</p>
                <p style={{ fontFamily: body, fontSize: 12, color: T.faint, margin: '4px 0 0', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Clock size={12} /> {req.units_needed} units · {new Date(req.needed_by).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              <ChevronRight size={18} color={T.faint} />
            </div>
          </Card>
        ))
      )}

      <BottomNav />
    </div>
  );
}
