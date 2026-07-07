import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './hooks/useAuth.js';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { T } from './theme.js';
import { API_URL, APP_VERSION } from './config.js';

console.log('[RaktaSetu] Version:', APP_VERSION, 'API:', API_URL);

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

/* Admin */
import AdminDashboard from './screens/AdminDashboard.jsx';

function App() {
  const { user, loading } = useAuth();
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

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
      <div style={{ maxWidth: isAdmin ? '100%' : 430, margin: '0 auto', minHeight: '100vh', position: 'relative' }}>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={user ? <Navigate to={user.role === 'hospital' ? '/console' : user.role === 'admin' ? '/admin' : '/home'} /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to={user.role === 'hospital' ? '/console' : user.role === 'admin' ? '/admin' : '/home'} /> : <Register />} />

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

          {/* Admin routes */}
          <Route path="/admin" element={
            <ProtectedRoute user={user} role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } />

          {/* Root redirect */}
          <Route path="/" element={<Navigate to={user ? (user.role === 'hospital' ? '/console' : user.role === 'admin' ? '/admin' : '/home') : '/login'} />} />
          <Route path="*" element={<Navigate to={user ? (user.role === 'hospital' ? '/console' : user.role === 'admin' ? '/admin' : '/home') : '/login'} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
