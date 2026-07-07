import React from 'react';
import { T } from '../App.jsx';

export default function Card({ children, style, dark }) {
  return (
    <div style={{
      background: dark ? T.consoleCard : T.card,
      border: `1px solid ${dark ? T.consoleLine : T.line}`,
      borderRadius: 16, padding: 16, ...style,
    }}>{children}</div>
  );
}
