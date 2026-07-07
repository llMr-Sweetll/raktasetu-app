import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

try {
  const root = document.getElementById('root')
  if (!root) {
    throw new Error('Root element #root not found in DOM')
  }
  console.log('[RaktaSetu] main.jsx executing, root found:', !!root)
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>,
  )
  console.log('[RaktaSetu] React render called successfully')
} catch (err) {
  console.error('[RaktaSetu] FATAL render error:', err)
  const log = document.getElementById('error-log')
  if (log) {
    log.style.display = 'block'
    log.textContent = 'FATAL RENDER ERROR: ' + (err.message || err) + '\n\n' + (err.stack || 'No stack trace')
  }
  // Also show in root as fallback
  const root = document.getElementById('root')
  if (root) {
    root.innerHTML = '<div style="padding:40px; font-family:system-ui; color:#7A1626;"><h2>RaktaSetu failed to load</h2><p style="color:#333; white-space:pre-wrap; font-family:monospace; font-size:13px;">' + (err.message || err) + '</p><p>Please check the browser console for details.</p></div>'
  }
}
