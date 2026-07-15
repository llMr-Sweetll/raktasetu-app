import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BloodBridgeScene from '../components/BloodBridgeScene.jsx';
import { useAuth } from '../hooks/useAuth.js';
import { roleHome } from '../lib/roleHome.js';

const display = "'Anek Latin', 'Segoe UI', system-ui, sans-serif";
const body = "'Public Sans', 'Segoe UI', system-ui, sans-serif";

const STEPS = [
  {
    n: '1',
    title: 'Go on call',
    text: 'Donors open the app and signal they are ready nearby.',
  },
  {
    n: '2',
    title: 'Get matched',
    text: 'Hospitals broadcast compatible blood requests in real time.',
  },
  {
    n: '3',
    title: 'Donate & earn',
    text: 'Respond, arrive, verify — and earn credits that help families.',
  },
];

const ctaPrimary = {
  fontFamily: display,
  fontWeight: 700,
  fontSize: 16,
  minHeight: 48,
  padding: '14px 22px',
  borderRadius: 12,
  background: '#C8102E',
  color: '#fff',
  textDecoration: 'none',
  border: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
};

const ctaSecondary = {
  ...ctaPrimary,
  background: 'transparent',
  color: '#F2E8E6',
  border: '1px solid rgba(242,232,230,0.35)',
};

function Section({ title, children, delay = 0 }) {
  return (
    <section
      style={{
        padding: '48px 0 8px',
        borderTop: '1px solid rgba(242,232,230,0.08)',
        animation: `rsFadeUp 0.8s ease-out ${delay}s both`,
      }}
    >
      <h2
        style={{
          fontFamily: display,
          fontWeight: 800,
          fontSize: 'clamp(22px, 5vw, 28px)',
          letterSpacing: '-0.02em',
          color: '#F2E8E6',
          margin: '0 0 12px',
        }}
      >
        {title}
      </h2>
      <div
        style={{
          fontFamily: body,
          fontSize: 15,
          lineHeight: 1.6,
          color: '#A89B96',
          maxWidth: 420,
        }}
      >
        {children}
      </div>
    </section>
  );
}

export default function Landing() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading || !user) return;
    navigate(roleHome(user), { replace: true });
  }, [user, loading, navigate]);

  return (
    <div
      className="safe-top safe-bottom"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'auto',
        color: '#F2E8E6',
        background: '#0A0506',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      {/* Fixed Living Bridge behind hero */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <BloodBridgeScene />
      </div>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background:
            'linear-gradient(180deg, rgba(10,5,6,0.4) 0%, rgba(10,5,6,0.2) 35%, rgba(10,5,6,0.92) 100%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 560,
          margin: '0 auto',
          padding:
            'max(24px, env(safe-area-inset-top)) clamp(20px, 5vw, 40px) max(32px, env(safe-area-inset-bottom))',
        }}
      >
        {/* Hero — one composition */}
        <header
          style={{
            minHeight: 'calc(100dvh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 48px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            paddingBottom: 32,
          }}
        >
          <p
            style={{
              fontFamily: display,
              fontWeight: 800,
              fontSize: 'clamp(42px, 11vw, 64px)',
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
              fontWeight: 500,
              fontSize: 15,
              margin: '8px 0 0',
              color: '#A89B96',
              letterSpacing: '0.04em',
              animation: 'rsFadeUp 0.9s ease-out 0.08s both',
            }}
          >
            रक्तसेतु · Blood Bridge
          </p>
          <p
            style={{
              fontFamily: display,
              fontWeight: 600,
              fontSize: 'clamp(18px, 4.5vw, 24px)',
              margin: '18px 0 0',
              color: '#F2E8E6',
              lineHeight: 1.25,
              animation: 'rsFadeUp 0.9s ease-out 0.14s both',
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
            Connect. Donate. Save Lives.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              marginTop: 28,
              animation: 'rsFadeUp 0.9s ease-out 0.34s both',
            }}
          >
            <Link to="/login" style={{ ...ctaPrimary, width: '100%' }}>
              Sign in as donor
            </Link>
            <Link to="/register" style={{ ...ctaSecondary, width: '100%' }}>
              Create account
            </Link>
          </div>
        </header>

        {/* Content sections on darker panel */}
        <div
          style={{
            marginTop: 8,
            padding: '8px 0 24px',
            background: 'rgba(10,5,6,0.72)',
            backdropFilter: 'blur(8px)',
            borderRadius: 16,
            paddingLeft: 4,
            paddingRight: 4,
          }}
        >
          <Section title="Mission">
            <p style={{ margin: 0 }}>
              Connect willing donors with hospitals in real time so blood reaches patients faster.
              When a request goes out, compatible donors nearby can answer — GPS-matched, verified, and ready.
            </p>
          </Section>

          <Section title="Vision" delay={0.05}>
            <p style={{ margin: 0 }}>
              A living bridge across India where verified donors answer when every minute counts —
              so no emergency goes unanswered for lack of a match.
            </p>
          </Section>

          <Section title="How it works" delay={0.1}>
            <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {STEPS.map((s) => (
                <li
                  key={s.n}
                  style={{
                    display: 'flex',
                    gap: 14,
                    marginBottom: 18,
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    style={{
                      fontFamily: display,
                      fontWeight: 800,
                      fontSize: 18,
                      color: '#C8102E',
                      minWidth: 28,
                      lineHeight: 1.3,
                    }}
                    aria-hidden="true"
                  >
                    {s.n}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: display,
                        fontWeight: 700,
                        fontSize: 16,
                        color: '#F2E8E6',
                        margin: '0 0 4px',
                      }}
                    >
                      {s.title}
                    </p>
                    <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5 }}>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          <section
            style={{
              padding: '36px 0 16px',
              borderTop: '1px solid rgba(242,232,230,0.08)',
            }}
          >
            <p
              style={{
                fontFamily: display,
                fontWeight: 700,
                fontSize: 18,
                color: '#F2E8E6',
                margin: '0 0 16px',
              }}
            >
              Ready to become a bridge?
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Link to="/login" style={{ ...ctaPrimary, width: '100%' }}>
                Sign in as donor
              </Link>
              <Link to="/register" style={{ ...ctaSecondary, width: '100%' }}>
                Create account
              </Link>
            </div>
          </section>
        </div>

        <footer
          style={{
            fontFamily: body,
            fontSize: 13,
            color: '#6F6963',
            margin: '28px 0 8px',
            textAlign: 'center',
            lineHeight: 1.7,
          }}
        >
          <div>
            <Link to="/privacy" style={{ color: '#A89B96', textDecoration: 'none' }}>
              Privacy
            </Link>
            {' · '}
            <a href="mailto:support@raktasetu.org" style={{ color: '#A89B96', textDecoration: 'none' }}>
              support@raktasetu.org
            </a>
          </div>
          <div style={{ marginTop: 10 }}>
            <Link
              to="/login?role=hospital"
              style={{
                color: '#6F6963',
                textDecoration: 'underline',
                textUnderlineOffset: 3,
                fontSize: 12,
                minHeight: 44,
                display: 'inline-flex',
                alignItems: 'center',
                padding: '8px 4px',
              }}
            >
              Hospital login
            </Link>
          </div>
        </footer>
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
