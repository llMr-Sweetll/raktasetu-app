import React from 'react';
import { Navigate } from 'react-router-dom';
import { roleHome } from '../lib/roleHome.js';

export default function ProtectedRoute({ user, role, children }) {
  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) {
    return <Navigate to={roleHome(user)} replace />;
  }
  return children;
}
