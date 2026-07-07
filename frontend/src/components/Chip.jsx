import React from 'react';
import { T } from '../App.jsx';

const body = "'Public Sans', 'Segoe UI', system-ui, sans-serif";

export default function Chip({ children, tone = 'line', dark }) {
  const tones = {
    line: { bg: dark ? T.consoleCard : '#FFFFFF', fg: dark ? T.consoleMut : T.mut, bd: dark ? T.consoleLine : T.line },
    red: { bg: T.arterialSoft, fg: T.arterial, bd: '#F3C9D0' },
    green: { bg: T.leafSoft, fg: T.leaf, bd: '#CBE3D8' },
    solid: { bg: T.oxblood, fg: '#fff', bd: T.oxblood },
    gold: { bg: '#F6EFDD', fg: T.gold, bd: '#E6D9B8' },
  }[tone];
  return (
    <span style={{
      fontFamily: body, fontSize: 11, fontWeight: 700, letterSpacing: '0.04em',
      padding: '3px 9px', borderRadius: 99, background: tones.bg, color: tones.fg,
      border: `1px solid ${tones.bd}`, textTransform: 'uppercase', whiteSpace: 'nowrap',
    }}>{children}</span>
  );
}
