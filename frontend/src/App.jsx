import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './hooks/useAuth.js';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { T } from './theme.js';
import { API_URL, APP_VERSION } from './config.js';
import { roleHome } from './lib/roleHome.js';

console.log('[RaktaSetu] Version:', APP_VERSION, 'API:', API_URL);

/* Auth / public */
import Landing from './screens/Landing.jsx';
import Login from './screens/Login.jsx';
import Register from './screens/Register.jsx';
import PrivacyPolicy from './screens/PrivacyPolicy.jsx';

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

const PUBLIC_PATHS = new Set(['/', '/login', '/register', '/privacy']);

function App() {
  const { user, loading } = useAuth();
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const isPublic = PUBLIC_PATHS.has(location.pathname);
  const isFullBleed = location.pathname === '/' || location.pathname === '/login';

  // Only block protected routes while session is resolving — never the landing.
  if (loading && !isPublic) {
    return (
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
        fontFamily: "'Public Sans', 'Segoe UI', system-ui, sans-serif", color: T.mut,
        background: T.porcelain,
      }}>
        Loading RaktaSetu...
      </div>
    );
  }

  return (
    <div style={{
      fontFamily: "'Public Sans', 'Segoe UI', system-ui, sans-serif",
      background: isFullBleed ? '#0A0506' : T.porcelain,
      minHeight: '100vh',
      color: T.ink,
    }}>
      <div style={{
        maxWidth: isAdmin || isFullBleed ? '100%' : 430,
        margin: '0 auto',
        minHeight: '100vh',
        position: 'relative',
      }}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={user ? <Navigate to={roleHome(user)} replace /> : <Landing />} />
          <Route path="/login" element={user ? <Navigate to={roleHome(user)} replace /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to={roleHome(user)} replace /> : <Register />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />

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

          <Route path="*" element={<Navigate to={user ? roleHome(user) : '/'} replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
