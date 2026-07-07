import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ user, role, children }) {
  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) {
    const redirectTo = user.role === 'hospital' ? '/console' : user.role === 'admin' ? '/admin' : '/home';
    return <Navigate to={redirectTo} replace />;
  }
  return children;
}
