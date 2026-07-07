import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { QrCode, CheckCircle2, ArrowLeft, Search } from 'lucide-react';
import { T } from '../theme.js';
import Card from '../components/Card.jsx';
import Btn from '../components/Btn.jsx';
import Chip from '../components/Chip.jsx';
import api from '../api/client.js';

const body = "'Public Sans', 'Segoe UI', system-ui, sans-serif";
const display = "'Anek Latin', 'Segoe UI', system-ui, sans-serif";

export default function ConsoleVerify() {
  const navigate = useNavigate();
  const [refCode, setRefCode] = useState('');
  const [donor, setDonor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);
  const scannerRef = useRef(null);
  const scannerContainerRef = useRef(null);

  const searchDonor = async () => {
    if (!refCode.trim()) return;
    setLoading(true);
    setError('');
    try {
      const { data } = await api.get(`/hospital/requests?ref=${refCode.trim()}`);
      if (data.donor) setDonor(data.donor);
      else setError('Donor not found');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to find donor');
    } finally {
      setLoading(false);
    }
  };

  const confirmDonation = async () => {
    if (!donor) return;
    setLoading(true);
    try {
      await api.post('/hospital/verify-donation', {
        donor_id: donor.id,
        request_id: donor.request_id,
      });
      setDone(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to verify donation');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: T.consoleBg, padding: '14px 16px 20px', maxWidth: 430, margin: '0 auto' }}>
      <button onClick={() => navigate('/console')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12, fontFamily: body, fontSize: 13, color: T.consoleMut }}>
        <ArrowLeft size={16} /> Back to console
      </button>

      <p style={{ fontFamily: display, fontWeight: 800, fontSize: 18, color: '#F0EEE9', margin: '0 0 4px' }}>Verify donor</p>
      <p style={{ fontFamily: body, fontSize: 12, color: T.consoleMut, margin: '0 0 14px' }}>Scan QR code or enter reference code to verify donation</p>

      {/* QR Scanner placeholder — html5-qrcode would be initialized here in production */}
      <Card dark style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center', padding: 20 }}>
        <div ref={scannerContainerRef} style={{ width: '100%', maxWidth: 280, aspectRatio: '1', borderRadius: 12, border: `1.5px dashed ${T.consoleLine}`, display: 'flex', alignItems: 'center', justifyContent: 'center', background: T.consoleCard }}>
          <QrCode size={48} color="#F0EEE9" />
        </div>
        <p style={{ fontFamily: body, fontSize: 12, color: T.consoleMut, margin: 0, textAlign: 'center' }}>
          Camera access required for QR scanning. Use manual entry below as fallback.
        </p>
      </Card>

      <div style={{ marginTop: 16 }}>
        <p style={{ fontFamily: body, fontSize: 11, color: T.consoleMut, textTransform: 'uppercase', letterSpacing: '.07em', margin: '0 0 8px' }}>Or enter reference code</p>
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            type="text"
            placeholder="e.g. RS-4821"
            value={refCode}
            onChange={(e) => setRefCode(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && searchDonor()}
            style={{
              flex: 1, padding: '12px 14px', borderRadius: 12, border: `1px solid ${T.consoleLine}`,
              fontFamily: body, fontSize: 15, background: T.consoleCard, color: '#F0EEE9',
            }}
          />
          <Btn kind="ghost" dark small onClick={searchDonor} disabled={loading}>
            <Search size={14} />
          </Btn>
        </div>
      </div>

      {error && <p style={{ fontFamily: body, fontSize: 12, color: '#E4506B', marginTop: 12 }}>{error}</p>}

      {donor && (
        <Card dark style={{ marginTop: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontFamily: display, fontWeight: 800, fontSize: 16, margin: 0, color: '#F0EEE9' }}>{donor.name} · {donor.blood_group}</p>
              <p style={{ fontFamily: body, fontSize: 12, color: T.consoleMut, margin: '3px 0 0' }}>Ref {donor.ref_code} · accepted {new Date(donor.responded_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} · Aadhaar verified</p>
            </div>
            <Chip tone="green" dark>Arrived</Chip>
          </div>
          <div style={{ height: 1, background: T.consoleLine, margin: '13px 0' }} />
          {done ? (
            <p style={{ fontFamily: display, fontWeight: 700, fontSize: 14, color: '#3DBD8A', margin: 0, display: 'flex', gap: 8, alignItems: 'center' }}>
              <CheckCircle2 size={17} /> Donation confirmed · 100 credits sent to donor
            </p>
          ) : (
            <Btn kind="green" full onClick={confirmDonation} disabled={loading}>
              {loading ? 'Confirming...' : 'Confirm donation · credit 100 points'}
            </Btn>
          )}
        </Card>
      )}

      <p style={{ fontFamily: body, fontSize: 11.5, color: T.consoleMut, marginTop: 12, lineHeight: 1.5 }}>
        Confirmation closes the loop: donor credits are issued only after bank staff verify the collected unit — the digital version of stamping a donor card.
      </p>
    </div>
  );
}
