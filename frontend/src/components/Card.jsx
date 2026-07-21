import React from 'react';
import { T } from '../theme.js';

export default function Card({ children, style, dark, ...rest }) {
  return (
    <div
      {...rest}
      style={{
        background: dark ? T.consoleCard : T.card,
        border: `1px solid ${dark ? T.consoleLine : T.line}`,
        borderRadius: 16, padding: 16, ...style,
      }}
    >{children}</div>
  );
}
