import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Radio, MapPin, Clock, Droplet, ArrowRight } from 'lucide-react';
import { T, GIVERS } from '../theme.js';
import Chip from '../components/Chip.jsx';
import Card from '../components/Card.jsx';
import Btn from '../components/Btn.jsx';
import BottomNav from '../components/BottomNav.jsx';
import api from '../api/client.js';
import { useAuth } from '../hooks/useAuth.js';

const body = "'Public Sans', 'Segoe UI', system-ui, sans-serif";
const display = "'Anek Latin', 'Segoe UI', system-ui, sans-serif";

export default function DonorAlert() {
  const { requestId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [responding, setResponding] = useState(false);

  useEffect(() => {
    fetchRequest();
  }, [requestId]);

  const fetchRequest = async () => {
    try {
      const { data: response } = await api.get(`/donor/requests`);
      const payload = response.data || response;
      const found = payload.requests?.find(r => r.id === requestId);
      if (found) setRequest(found);
      else setError('Request not found');
    } catch (_err) {
      setError('Failed to load request details');
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = async () => {
    setResponding(true);
    try {
      await api.post(`/donor/respond/${requestId}`, { status: 'accepted' });
      navigate(`/on-the-way/${requestId}`);
    } catch (_err) {
      setError(_err.response?.data?.error || 'Failed to accept request');
    } finally {
      setResponding(false);
    }
  };

  const handleDecline = async () => {
    setResponding(true);
    try {
      await api.post(`/donor/respond/${requestId}`, { status: 'declined' });
      navigate('/home');
    } catch (_err) {
      setError(_err.response?.data?.error || 'Failed to decline request');
    } finally {
      setResponding(false);
    }
  };

  if (loading) return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: body }}>Loading...</div>;
  if (!request) return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: body, color: T.mut }}>Request not found</div>;

  const myGroup = user?.blood_group || 'Not set';
  const compatible = (GIVERS[request.blood_group] || []).includes(myGroup);

  return (
    <div style={{ padding: '18px 18px 90px', maxWidth: 430, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Radio size={16} color={T.arterial} />
        <span style={{ fontFamily: display, fontWeight: 800, fontSize: 13, letterSpacing: '.12em', color: T.arterial }}>EMERGENCY PING</span>
      </div>

      <Card style={{ marginTop: 14, borderColor: '#F0BFC8', background: '#FFF9FA', padding: 18 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <p style={{ fontFamily: body, fontSize: 12, color: T.mut, margin: 0 }}>Patient needs</p>
            <p style={{ fontFamily: display, fontWeight: 800, fontSize: 40, lineHeight: 1, margin: '4px 0 0', color: T.arterial }}>{request.blood_group}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <Chip tone="red">{request.urgency}</Chip>
            <p style={{ fontFamily: display, fontWeight: 700, fontSize: 15, margin: '8px 0 0', color: T.ink }}>{request.units_needed} units</p>
            <p style={{ fontFamily: body, fontSize: 12, color: T.mut, margin: '2px 0 0', display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'flex-end' }}>
              <Clock size={12} /> {request.needed_by ? new Date(request.needed_by).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'ASAP'}
            </p>
          </div>
        </div>

        <div style={{ height: 1, background: '#F0BFC8', margin: '14px 0' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <MapPin size={15} color={T.oxblood} />
          <div>
            <p style={{ fontFamily: display, fontWeight: 700, fontSize: 14.5, margin: 0, color: T.ink }}>{request.hospital_name}</p>
            <p style={{ fontFamily: body, fontSize: 12, color: T.mut, margin: '1px 0 0' }}>{request.hospital_address} · {request.distance_km?.toFixed(1)} km from you</p>
          </div>
        </div>

        <div style={{
          marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          background: '#fff', border: `1px dashed ${T.line}`, borderRadius: 12, padding: '10px 12px',
        }}>
          <span style={{ fontFamily: display, fontWeight: 800, color: T.oxblood, fontSize: 15 }}>Your {myGroup}</span>
          <ArrowRight size={15} color={T.faint} />
          <span style={{ fontFamily: display, fontWeight: 800, color: T.ink, fontSize: 15 }}>Patient {request.blood_group}</span>
          <Chip tone={compatible ? 'green' : 'red'}>{compatible ? 'Compatible' : 'Not compatible'}</Chip>
        </div>
      </Card>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
        <Btn kind="critical" full onClick={handleAccept} disabled={responding || !compatible}>
          <Droplet size={16} /> Accept, I can donate
        </Btn>
        <Btn kind="ghost" full onClick={handleDecline} disabled={responding}>Can't donate right now</Btn>
      </div>
      <p style={{ fontFamily: body, fontSize: 11.5, color: T.faint, textAlign: 'center', marginTop: 12 }}>
        Declining never affects your credits. {request.donors_pinged ?? 'No count available'} compatible donors were pinged.
      </p>
      {error && <p style={{ fontFamily: body, fontSize: 12, color: T.arterial, textAlign: 'center', marginTop: 8 }}>{error}</p>}
      <BottomNav />
    </div>
  );
}
