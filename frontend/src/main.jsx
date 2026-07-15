import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { registerSW } from 'virtual:pwa-register'
import App from './App.jsx'
import { AuthProvider } from './hooks/useAuth.js'
import './index.css'
import './public.css'

try {
  registerSW({ immediate: true })
} catch (err) {
  console.warn('[RaktaSetu] SW register skipped:', err)
}

try {
  const root = document.getElementById('root')
  if (!root) {
    throw new Error('Root element #root not found in DOM')
  }
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <HashRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </HashRouter>
    </React.StrictMode>,
  )
} catch (err) {
  console.error('[RaktaSetu] The application could not start.')
  const root = document.getElementById('root')
  if (root) {
    root.innerHTML = '<div style="min-height:100vh;display:grid;place-items:center;padding:32px;font-family:system-ui;color:#17151A;background:#F5F3F0;text-align:center;"><div><h1>RaktaSetu could not load</h1><p style="margin-top:12px;color:#6F6963;">Check your connection, then refresh the page.</p><button id="reload-app" style="min-height:44px;margin-top:18px;padding:10px 18px;border:0;border-radius:8px;background:#7A1626;color:#fff;font-weight:700;">Refresh</button></div></div>'
    document.getElementById('reload-app')?.addEventListener('click', () => window.location.reload())
  }
}
