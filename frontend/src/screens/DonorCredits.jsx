import React, { useState, useEffect } from 'react';
import { T } from '../theme.js';
import Card from '../components/Card.jsx';
import Btn from '../components/Btn.jsx';
import BottomNav from '../components/BottomNav.jsx';
import api from '../api/client.js';
import { t } from '../i18n.js';

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
      const { data: response } = await api.get('/donor/credits');
      const payload = response.data || response;
      setBalance(payload.balance || 0);
      setLedger(payload.history || []);
    } catch (_err) {
      setError(t('credits.loadFailed'));
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: body }}>{t('credits.loading')}</div>;

  return (
    <div style={{ padding: '18px 18px calc(90px + env(safe-area-inset-bottom))', maxWidth: 430, margin: '0 auto' }}>
      <h2 style={{ fontFamily: display, fontWeight: 800, fontSize: 22, margin: 0, color: T.ink }}>{t('credits.title')}</h2>
      <p style={{ fontFamily: body, fontSize: 13, color: T.mut, margin: '4px 0 14px' }}>{t('credits.subtitle')}</p>

      <Card style={{ background: T.oxblood, borderColor: T.oxbloodDark }}>
        <p style={{ fontFamily: body, fontSize: 11.5, color: '#E8B9C2', margin: 0, textTransform: 'uppercase', letterSpacing: '.08em' }}>{t('credits.balance')}</p>
        <p style={{ fontFamily: display, fontWeight: 800, fontSize: 42, color: '#fff', margin: '2px 0 0', lineHeight: 1 }}>{balance}</p>
        <p style={{ fontFamily: body, fontSize: 12.5, color: '#E8B9C2', margin: '10px 0 0' }}>
          {t('credits.rule')}
        </p>
      </Card>

      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <Btn kind="ghost" small full>{t('credits.redeem')}</Btn>
        <Btn kind="ghost" small full>{t('credits.addFamily')}</Btn>
      </div>

      <p style={{ fontFamily: body, fontSize: 11, color: T.faint, textTransform: 'uppercase', letterSpacing: '.06em', margin: '18px 0 8px' }}>{t('credits.ledger')}</p>

      {error && <p style={{ fontFamily: body, fontSize: 12, color: T.arterial }}>{error}</p>}

      {ledger.length === 0 ? (
        <Card>
          <p style={{ fontFamily: body, fontSize: 13, color: T.mut, margin: 0, textAlign: 'center' }}>{t('credits.empty')}</p>
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
