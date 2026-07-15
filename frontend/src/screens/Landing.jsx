import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BloodBridgeScene from '../components/BloodBridgeScene.jsx';
import { useAuth } from '../hooks/useAuth.js';

const display = "'Anek Latin', 'Segoe UI', system-ui, sans-serif";
const body = "'Public Sans', 'Segoe UI', system-ui, sans-serif";

export default function Landing() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading || !user) return;
    navigate(
      user.role === 'hospital' ? '/console' : user.role === 'admin' ? '/admin' : '/home',
      { replace: true }
    );
  }, [user, loading, navigate]);

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        color: '#F2E8E6',
        background: '#0A0506',
      }}
    >
      <BloodBridgeScene />

      {/* Atmospheric vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background:
            'linear-gradient(180deg, rgba(10,5,6,0.35) 0%, rgba(10,5,6,0.15) 40%, rgba(10,5,6,0.75) 100%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'clamp(24px, 5vw, 48px)',
          maxWidth: 560,
          margin: '0 auto',
        }}
      >
        <p
          style={{
            fontFamily: display,
            fontWeight: 800,
            fontSize: 'clamp(42px, 10vw, 64px)',
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            margin: 0,
            color: '#F2E8E6',
            animation: 'rsFadeUp 0.9s ease-out both',
          }}
        >
          RaktaSetu
        </p>
        <p
          style={{
            fontFamily: display,
            fontWeight: 600,
            fontSize: 'clamp(18px, 4vw, 24px)',
            margin: '14px 0 0',
            color: '#F2E8E6',
            lineHeight: 1.25,
            animation: 'rsFadeUp 0.9s ease-out 0.12s both',
          }}
        >
          The living bridge between donors and hospitals.
        </p>
        <p
          style={{
            fontFamily: body,
            fontSize: 15,
            lineHeight: 1.55,
            color: '#A89B96',
            margin: '12px 0 0',
            maxWidth: 380,
            animation: 'rsFadeUp 0.9s ease-out 0.22s both',
          }}
        >
          When blood is needed, nearby donors answer. Connect. Donate. Save lives.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            marginTop: 28,
            animation: 'rsFadeUp 0.9s ease-out 0.34s both',
          }}
        >
          <Link
            to="/login"
            style={{
              fontFamily: display,
              fontWeight: 700,
              fontSize: 15,
              padding: '14px 22px',
              borderRadius: 12,
              background: '#C8102E',
              color: '#fff',
              textDecoration: 'none',
              border: 'none',
            }}
          >
            Enter RaktaSetu
          </Link>
          <Link
            to="/register"
            style={{
              fontFamily: display,
              fontWeight: 700,
              fontSize: 15,
              padding: '14px 22px',
              borderRadius: 12,
              background: 'transparent',
              color: '#F2E8E6',
              textDecoration: 'none',
              border: '1px solid rgba(242,232,230,0.35)',
            }}
          >
            Create account
          </Link>
        </div>

        <p
          style={{
            fontFamily: body,
            fontSize: 12,
            color: '#6F6963',
            margin: '28px 0 8px',
            animation: 'rsFadeUp 0.9s ease-out 0.45s both',
          }}
        >
          <Link to="/privacy" style={{ color: '#A89B96', textDecoration: 'none' }}>
            Privacy
          </Link>
          {' · '}
          support@raktasetu.org
        </p>
      </div>

      <style>{`
        @keyframes rsFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
