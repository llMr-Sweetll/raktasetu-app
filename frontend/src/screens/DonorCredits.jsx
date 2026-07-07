import React, { useState, useEffect } from 'react';
import { T } from '../App.jsx';
import Card from '../components/Card.jsx';
import Btn from '../components/Btn.jsx';
import BottomNav from '../components/BottomNav.jsx';
import api from '../api/client.js';

const body = "'Public Sans', 'Segoe UI', system-ui, sans-serif";
const display = "'Anek Latin', 'Segoe UI', system-ui, sans-serif";

export default function DonorCredits() {
  const [balance, setBalance] = useState(0);
  const [ledger, setLedger] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCredits();
  }, []);

  const fetchCredits = async () => {
    try {
      const { data } = await api.get('/donor/credits');
      setBalance(data.balance || 0);
      setLedger(data.ledger || []);
    } catch (err) {
      setError('Failed to load credits');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: body }}>Loading...</div>;

  return (
    <div style={{ padding: '18px 18px 90px', maxWidth: 430, margin: '0 auto' }}>
      <h2 style={{ fontFamily: display, fontWeight: 800, fontSize: 22, margin: 0, color: T.ink }}>Credits</h2>
      <p style={{ fontFamily: body, fontSize: 13, color: T.mut, margin: '4px 0 14px' }}>Your digital replacement card — no paper, no lost cards.</p>

      <Card style={{ background: T.oxblood, borderColor: T.oxbloodDark }}>
        <p style={{ fontFamily: body, fontSize: 11.5, color: '#E8B9C2', margin: 0, textTransform: 'uppercase', letterSpacing: '.08em' }}>Balance</p>
        <p style={{ fontFamily: display, fontWeight: 800, fontSize: 42, color: '#fff', margin: '2px 0 0', lineHeight: 1 }}>{balance}</p>
        <p style={{ fontFamily: body, fontSize: 12.5, color: '#E8B9C2', margin: '10px 0 0' }}>
          100 credits waive 1 replacement unit — for you or 4 registered family members.
        </p>
      </Card>

      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <Btn kind="ghost" small full>Redeem for family</Btn>
        <Btn kind="ghost" small full>Add family member</Btn>
      </div>

      <p style={{ fontFamily: body, fontSize: 11, color: T.faint, textTransform: 'uppercase', letterSpacing: '.06em', margin: '18px 0 8px' }}>Ledger</p>

      {error && <p style={{ fontFamily: body, fontSize: 12, color: T.arterial }}>{error}</p>}

      {ledger.length === 0 ? (
        <Card>
          <p style={{ fontFamily: body, fontSize: 13, color: T.mut, margin: 0, textAlign: 'center' }}>No credit transactions yet. Donate to earn credits!</p>
        </Card>
      ) : (
        ledger.map((r) => (
          <Card key={r.id} style={{ marginBottom: 8, padding: 13, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontFamily: display, fontWeight: 700, fontSize: 13.5, margin: 0, color: T.ink }}>{r.description}</p>
              <p style={{ fontFamily: body, fontSize: 11.5, color: T.faint, margin: '2px 0 0' }}>{new Date(r.created_at).toLocaleDateString()}</p>
            </div>
            <span style={{ fontFamily: display, fontWeight: 800, fontSize: 15, color: r.type === 'earned' ? T.leaf : T.arterial }}>
              {r.type === 'earned' ? '+' : '−'}{Math.abs(r.amount)}
            </span>
          </Card>
        ))
      )}

      <BottomNav />
    </div>
  );
}
