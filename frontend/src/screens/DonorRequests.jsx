import React, { useState, useEffect } from 'react';
import { Map as MapIcon, List, ChevronRight, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { T } from '../theme.js';
import Card from '../components/Card.jsx';
import BottomNav from '../components/BottomNav.jsx';
import api from '../api/client.js';
import { CircleMarker, MapContainer, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const body = "'Public Sans', 'Segoe UI', system-ui, sans-serif";
const display = "'Anek Latin', 'Segoe UI', system-ui, sans-serif";

export default function DonorRequests() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [view, setView] = useState('list');
  const mappedRequests = requests.filter((request) => Number.isFinite(Number(request.latitude)) && Number.isFinite(Number(request.longitude)));

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const { data: response } = await api.get('/donor/requests');
      const payload = response.data || response;
      setRequests(payload.requests || []);
    } catch (_err) {
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
      ) : view === 'map' ? (
        mappedRequests.length ? (
          <div role="region" aria-label="Map of nearby blood requests" style={{ height: 'min(62vh, 520px)', minHeight: 360, borderRadius: 18, overflow: 'hidden', border: `1px solid ${T.line}` }}>
            <MapContainer
              center={[Number(mappedRequests[0].latitude), Number(mappedRequests[0].longitude)]}
              zoom={12}
              scrollWheelZoom
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {mappedRequests.map((request) => (
                <CircleMarker
                  key={request.id}
                  center={[Number(request.latitude), Number(request.longitude)]}
                  radius={request.urgency === 'critical' ? 12 : 9}
                  pathOptions={{ color: '#fff', weight: 2, fillColor: request.urgency === 'critical' ? T.arterial : T.oxblood, fillOpacity: 0.95 }}
                >
                  <Popup>
                    <strong>{request.blood_group} · {request.hospital_name}</strong><br />
                    {request.units_needed} units · {request.distance_km?.toFixed(1)} km<br />
                    <button type="button" onClick={() => navigate(`/alert/${request.id}`)}>Review request</button>
                  </Popup>
                </CircleMarker>
              ))}
            </MapContainer>
          </div>
        ) : (
          <Card><p style={{ margin: 0, color: T.mut }}>These requests do not include mappable coordinates. Use the list view for details.</p></Card>
        )
      ) : (
        requests.map((req) => (
          <Card
            key={req.id}
            style={{ marginBottom: 10, cursor: 'pointer' }}
            onClick={() => navigate(`/alert/${req.id}`)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') navigate(`/alert/${req.id}`);
            }}
            role="link"
            tabIndex={0}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontFamily: display, fontWeight: 800, fontSize: 22, color: T.arterial }}>{req.blood_group}</span>
                  <span style={{ fontFamily: body, fontSize: 11, color: req.urgency === 'critical' ? T.arterial : req.urgency === 'urgent' ? T.gold : T.mut, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {req.urgency}
                  </span>
                </div>
                <p style={{ fontFamily: display, fontWeight: 700, fontSize: 14, margin: 0, color: T.ink }}>{req.hospital_name}</p>
                <p style={{ fontFamily: body, fontSize: 12, color: T.mut, margin: '2px 0 0' }}>{req.hospital_address || req.address || req.hospital_name} · {req.distance_km?.toFixed(1)} km</p>
                <p style={{ fontFamily: body, fontSize: 12, color: T.faint, margin: '4px 0 0', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Clock size={12} /> {req.units_needed} units · {req.needed_by ? new Date(req.needed_by).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'ASAP'}
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
