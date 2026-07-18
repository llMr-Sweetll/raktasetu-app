import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CheckCircle2, Navigation, Phone, ArrowLeft } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { T } from '../theme.js';
import Card from '../components/Card.jsx';
import Btn from '../components/Btn.jsx';
import BottomNav from '../components/BottomNav.jsx';
import api from '../api/client.js';

const body = "'Public Sans', 'Segoe UI', system-ui, sans-serif";
const display = "'Anek Latin', 'Segoe UI', system-ui, sans-serif";

export default function DonorOnTheWay() {
  const { requestId } = useParams();
  const navigate = useNavigate();
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qrData, setQrData] = useState('');
  const [arrived, setArrived] = useState(false);
  const [arriving, setArriving] = useState(false);

  useEffect(() => {
    fetchRequest();
  }, [requestId]);

  const fetchRequest = async () => {
    try {
      const { data: response } = await api.get(`/donor/requests`);
      const payload = response.data || response;
      const found = payload.requests?.find(r => r.id === requestId);
      setRequest(found || null);
      if (found) setQrData(`RS-DONOR-${found.id}`);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  const openDirections = () => {
    if (!request?.latitude || !request?.longitude) return;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${request.latitude},${request.longitude}`;
    window.open(url, '_blank');
  };

  const callHospital = () => {
    if (request?.hospital_phone) window.location.href = `tel:${request.hospital_phone}`;
  };

  const markArrived = async () => {
    try {
      setArriving(true);
      await api.post(`/donor/arrived/${requestId}`);
      setArrived(true);
    } catch (_err) {
      alert(_err.response?.data?.error || 'Failed to mark arrival');
    } finally {
      setArriving(false);
    }
  };

  if (loading) return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: body }}>Loading...</div>;

  return (
    <div style={{ padding: '18px 18px calc(90px + env(safe-area-inset-bottom))', maxWidth: 430, margin: '0 auto' }}>
      <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12, fontFamily: body, fontSize: 13, color: T.mut }}>
        <ArrowLeft size={16} /> Back to home
      </button>

      <Card style={{ background: T.leafSoft, borderColor: '#CBE3D8', display: 'flex', gap: 10, alignItems: 'center' }}>
        <CheckCircle2 size={22} color={T.leaf} />
        <div>
          <p style={{ fontFamily: display, fontWeight: 800, fontSize: 15, margin: 0, color: T.leaf }}>You are confirmed as a donor</p>
          <p style={{ fontFamily: body, fontSize: 12.5, color: '#3E6B58', margin: '2px 0 0' }}>The blood bank has been notified you're coming.</p>
        </div>
      </Card>

      <Card style={{ marginTop: 12 }}>
        <p style={{ fontFamily: display, fontWeight: 800, fontSize: 16, margin: 0, color: T.ink }}>{request?.hospital_name || 'Hospital'}</p>
        <p style={{ fontFamily: body, fontSize: 12.5, color: T.mut, margin: '3px 0 12px' }}>{request?.address || ''} · ref {request?.ref_code || 'Not available'}</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Btn kind="primary" small onClick={openDirections}><Navigation size={14} /> Directions</Btn>
          <Btn kind="ghost" small onClick={callHospital}><Phone size={14} /> Call blood bank</Btn>
          <Btn kind="primary" small onClick={markArrived} disabled={arrived || arriving}>
            {arrived ? 'Arrived ✓' : arriving ? 'Marking...' : "I've Arrived"}
          </Btn>
        </div>
      </Card>

      <Card style={{ marginTop: 12 }}>
        <p style={{ fontFamily: body, fontSize: 11, color: T.faint, textTransform: 'uppercase', letterSpacing: '.06em', margin: 0 }}>Before you go</p>
        {['Carry a photo ID (Aadhaar or DL)', 'Eat a proper meal, drink water', 'No alcohol in the last 24 hours'].map((t) => (
          <p key={t} style={{ fontFamily: body, fontSize: 13.5, color: T.ink, margin: '9px 0 0', display: 'flex', gap: 8, alignItems: 'center' }}>
            <CheckCircle2 size={15} color={T.leaf} /> {t}
          </p>
        ))}
      </Card>

      <Card style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 14 }}>
        <div
          style={{
            width: 74,
            height: 74,
            borderRadius: 12,
            border: `1.5px solid ${T.line}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fff',
            padding: 5,
          }}
          aria-label="Donation verification QR code"
        >
          <QRCodeSVG
            value={qrData || `RS-DONOR-${requestId}`}
            size={64}
            bgColor="#FFFFFF"
            fgColor="#17151A"
          />
        </div>
        <div>
          <p style={{ fontFamily: display, fontWeight: 700, fontSize: 14.5, margin: 0, color: T.ink }}>Show this at the desk</p>
          <p style={{ fontFamily: body, fontSize: 12.5, color: T.mut, margin: '3px 0 0' }}>Staff will scan it to verify your donation.</p>
          <p style={{ fontFamily: display, fontWeight: 800, fontSize: 13, color: T.oxblood, margin: '6px 0 0' }}>+100 credits on verification</p>
        </div>
      </Card>

      <div style={{ marginTop: 14 }}>
        <Btn kind="ghost" full onClick={() => navigate('/home')}>Back to home</Btn>
      </div>
      <BottomNav />
    </div>
  );
}
