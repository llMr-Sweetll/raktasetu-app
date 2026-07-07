import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Bell, Award, User } from 'lucide-react';
import { T } from '../App.jsx';

const body = "'Public Sans', 'Segoe UI', system-ui, sans-serif";

const NavItem = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, flex: 1, padding: '8px 0' }}>
    {React.cloneElement(icon, { size: 20, color: active ? T.oxblood : T.faint, strokeWidth: active ? 2.4 : 2 })}
    <span style={{ fontFamily: body, fontSize: 10, fontWeight: active ? 700 : 500, color: active ? T.oxblood : T.faint }}>{label}</span>
  </button>
);

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const isActive = (p) => path.startsWith(p);

  return (
    <div style={{
      display: 'flex', borderTop: `1px solid ${T.line}`,
      background: 'rgba(255,255,255,0.93)', backdropFilter: 'blur(6px)',
      position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
      width: '100%', maxWidth: 430, zIndex: 100,
    }}>
      <NavItem icon={<Home />} label="Home" active={isActive('/home')} onClick={() => navigate('/home')} />
      <NavItem icon={<Bell />} label="Requests" active={isActive('/requests') || isActive('/alert')} onClick={() => navigate('/requests')} />
      <NavItem icon={<Award />} label="Credits" active={isActive('/credits')} onClick={() => navigate('/credits')} />
      <NavItem icon={<User />} label="Profile" active={isActive('/profile') || isActive('/history')} onClick={() => navigate('/profile')} />
    </div>
  );
}
