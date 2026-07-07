import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth.js';
import ProtectedRoute from './components/ProtectedRoute.jsx';

/* Auth */
import Login from './screens/Login.jsx';
import Register from './screens/Register.jsx';

/* Donor */
import DonorHome from './screens/DonorHome.jsx';
import DonorAlert from './screens/DonorAlert.jsx';
import DonorOnTheWay from './screens/DonorOnTheWay.jsx';
import DonorCredits from './screens/DonorCredits.jsx';
import DonorProfile from './screens/DonorProfile.jsx';
import DonorHistory from './screens/DonorHistory.jsx';
import DonorRequests from './screens/DonorRequests.jsx';

/* Hospital Console */
import Console from './screens/Console.jsx';
import ConsoleNewRequest from './screens/ConsoleNewRequest.jsx';
import ConsoleVerify from './screens/ConsoleVerify.jsx';

/* Design Tokens */
export const T = {
  oxblood: '#7A1626',
  oxbloodDark: '#5E0F1D',
  arterial: '#C8102E',
  arterialSoft: '#FBEBEE',
  ink: '#17151A',
  mut: '#6F6963',
  faint: '#9A938C',
  porcelain: '#F5F3F0',
  card: '#FFFFFF',
  line: '#E8E3DD',
  leaf: '#0F6B4A',
  leafSoft: '#E8F2EE',
  consoleBg: '#14161C',
  consoleCard: '#1D2028',
  consoleLine: '#2B2F3A',
  consoleMut: '#8B909C',
  gold: '#8A6A1F',
};

export const GIVERS = {
  'O-': ['O-'],
  'O+': ['O-', 'O+'],
  'A-': ['O-', 'A-'],
  'A+': ['O-', 'O+', 'A-', 'A+'],
  'B-': ['O-', 'B-'],
  'B+': ['O-', 'O+', 'B-', 'B+'],
  'AB-': ['O-', 'A-', 'B-', 'AB-'],
  'AB+': ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'],
};

export const RARE = ['O-', 'AB-'];
export const GROUPS = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

function App() {
  const { user, loading } = useAuth();

  if (loading) return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
      fontFamily: "'Public Sans', 'Segoe UI', system-ui, sans-serif", color: T.mut,
    }}>
      Loading RaktaSetu...
    </div>
  );

  return (
    <div style={{
      fontFamily: "'Public Sans', 'Segoe UI', system-ui, sans-serif",
      background: T.porcelain, minHeight: '100vh', color: T.ink,
    }}>
      <div style={{ maxWidth: 430, margin: '0 auto', minHeight: '100vh', position: 'relative' }}>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={user ? <Navigate to={user.role === 'hospital' ? '/console' : '/home'} /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to={user.role === 'hospital' ? '/console' : '/home'} /> : <Register />} />

          {/* Donor routes */}
          <Route path="/home" element={
            <ProtectedRoute user={user} role="donor">
              <DonorHome />
            </ProtectedRoute>
          } />
          <Route path="/alert/:requestId" element={
            <ProtectedRoute user={user} role="donor">
              <DonorAlert />
            </ProtectedRoute>
          } />
          <Route path="/on-the-way/:requestId" element={
            <ProtectedRoute user={user} role="donor">
              <DonorOnTheWay />
            </ProtectedRoute>
          } />
          <Route path="/credits" element={
            <ProtectedRoute user={user} role="donor">
              <DonorCredits />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute user={user} role="donor">
              <DonorProfile />
            </ProtectedRoute>
          } />
          <Route path="/history" element={
            <ProtectedRoute user={user} role="donor">
              <DonorHistory />
            </ProtectedRoute>
          } />
          <Route path="/requests" element={
            <ProtectedRoute user={user} role="donor">
              <DonorRequests />
            </ProtectedRoute>
          } />

          {/* Hospital routes */}
          <Route path="/console" element={
            <ProtectedRoute user={user} role="hospital">
              <Console />
            </ProtectedRoute>
          } />
          <Route path="/console/new-request" element={
            <ProtectedRoute user={user} role="hospital">
              <ConsoleNewRequest />
            </ProtectedRoute>
          } />
          <Route path="/console/verify" element={
            <ProtectedRoute user={user} role="hospital">
              <ConsoleVerify />
            </ProtectedRoute>
          } />

          {/* Root redirect */}
          <Route path="/" element={<Navigate to={user ? (user.role === 'hospital' ? '/console' : '/home') : '/login'} />} />
          <Route path="*" element={<Navigate to={user ? (user.role === 'hospital' ? '/console' : '/home') : '/login'} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
