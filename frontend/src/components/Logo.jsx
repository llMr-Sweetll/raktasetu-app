import React from 'react';
import { T } from '../App.jsx';

const display = "'Anek Latin', 'Segoe UI', system-ui, sans-serif";

export default function Logo({ size = 26, dark = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
      <div
        style={{
          width: size, height: size, borderRadius: '50% 50% 50% 4px',
          background: T.oxblood, transform: 'rotate(45deg)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 1px 4px rgba(122,22,38,.35)',
        }}
      >
        <div style={{
          width: size * 0.5, height: size * 0.28, background: dark ? T.consoleBg : T.porcelain,
          borderRadius: `${size}px ${size}px 0 0`, transform: 'rotate(-45deg) translateY(28%)',
        }} />
      </div>
      <span style={{ fontFamily: display, fontWeight: 800, fontSize: size * 0.78, letterSpacing: '-0.01em', color: dark ? '#F2EFEA' : T.ink }}>
        Rakta<span style={{ color: dark ? '#E4506B' : T.oxblood }}>Setu</span>
      </span>
    </div>
  );
}
