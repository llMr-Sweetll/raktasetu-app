import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PublicShell from '../components/PublicShell.jsx';
import api from '../api/client.js';
import { useAuth } from '../hooks/useAuth.js';
import usePageMeta from '../hooks/usePageMeta.js';

export default function DataRights() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [busy, setBusy] = useState('');
  const [status, setStatus] = useState('');
  const [showDelete, setShowDelete] = useState(false);
  const [confirmation, setConfirmation] = useState('');

  usePageMeta({
    title: 'Data Rights Center | RaktaSetu',
    description: 'Request access, export, correction, or deletion of RaktaSetu account data.',
    path: '/data-rights',
  });

  const downloadExport = async () => {
    setBusy('export');
    setStatus('');
    try {
      const response = await api.get('/auth/export');
      const payload = response.data?.data || response.data;
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `raktasetu-data-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      setStatus('Your account export has been downloaded to this device.');
    } catch (error) {
      setStatus(error.response?.data?.error || 'We could not prepare the export. Contact privacy@raktasetu.org for help.');
    } finally {
      setBusy('');
    }
  };

  const deleteAccount = async () => {
    if (confirmation !== 'DELETE') return;
    setBusy('delete');
    setStatus('');
    try {
      await api.delete('/auth/me');
      logout();
      navigate('/', { replace: true });
    } catch (error) {
      setStatus(error.response?.data?.error || 'Account deletion could not be completed. Contact privacy@raktasetu.org.');
      setBusy('');
    }
  };

  return (
    <PublicShell>
      <article className="policy-wrap">
        <p className="policy-kicker">Privacy controls</p>
        <h1>Data Rights Center</h1>
        <p className="policy-lede">
          Review the choices available for your RaktaSetu information and submit a
          request through the channel that fits your situation.
        </p>
        <p className="policy-date">Last reviewed: 15 July 2026</p>

        <div className="policy-callout">
          Rights vary by jurisdiction and can have legal exceptions. RaktaSetu must
          verify the requester's identity before acting on a request submitted by email.
        </div>

        <section className="policy-section">
          <h2>Available requests</h2>
          <ul>
            <li><strong>Access and export:</strong> receive a readable copy of account and activity data associated with your signed-in account.</li>
            <li><strong>Correction:</strong> update profile information in the app or ask for help correcting a record you cannot edit.</li>
            <li><strong>Deletion:</strong> anonymize direct account identifiers and disable the account, subject to valid retention requirements.</li>
            <li><strong>Restriction or objection:</strong> ask the operator to review whether a particular use should stop or be limited.</li>
            <li><strong>Consent withdrawal:</strong> stop optional processing where consent is the applicable legal basis. Withdrawal does not make earlier processing unlawful.</li>
            <li><strong>Complaint:</strong> contact the relevant privacy or data protection authority when applicable.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Your account tools</h2>
          {user ? (
            <>
              <p>
                Signed in as <strong>{user.email || user.phone || user.name}</strong>.
                Exports are created for this authenticated account only.
              </p>
              <div className="rights-actions">
                <button
                  className="rights-action"
                  type="button"
                  disabled={Boolean(busy)}
                  onClick={downloadExport}
                >
                  {busy === 'export' ? 'Preparing export…' : 'Download my data'}
                </button>
                <button
                  className="rights-action rights-action--danger"
                  type="button"
                  disabled={Boolean(busy)}
                  onClick={() => setShowDelete((value) => !value)}
                >
                  Request account deletion
                </button>
              </div>
              {showDelete ? (
                <div className="policy-callout" role="group" aria-labelledby="delete-account-title">
                  <h3 id="delete-account-title">Confirm account deletion</h3>
                  <p>
                    This disables the account, removes direct profile identifiers, clears
                    donor matching details, and signs you out. Some integrity or legal
                    records may remain in de-identified or restricted form.
                  </p>
                  <label htmlFor="delete-confirmation">
                    Type <strong>DELETE</strong> to continue.
                  </label>
                  <input
                    id="delete-confirmation"
                    className="rs-field"
                    type="text"
                    value={confirmation}
                    onChange={(event) => setConfirmation(event.target.value)}
                    autoComplete="off"
                    style={{
                      width: '100%',
                      minHeight: 48,
                      marginTop: 8,
                      padding: '12px 14px',
                      border: '1px solid #c9bdb6',
                      borderRadius: 8,
                      font: 'inherit',
                      background: '#fff',
                      color: '#17151A',
                      colorScheme: 'light',
                      caretColor: '#17151A',
                    }}
                  />
                  <button
                    className="rights-action rights-action--danger"
                    type="button"
                    disabled={confirmation !== 'DELETE' || Boolean(busy)}
                    onClick={deleteAccount}
                    style={{ width: '100%', marginTop: 12 }}
                  >
                    {busy === 'delete' ? 'Deleting account…' : 'Delete my account'}
                  </button>
                </div>
              ) : null}
              {status ? <p className="rights-status" role="status">{status}</p> : null}
            </>
          ) : (
            <p>
              <Link to="/login">Sign in</Link> to download your account export or use
              the authenticated deletion tool. You can also submit a request by email.
            </p>
          )}
        </section>

        <section className="policy-section">
          <h2>Email request workflow</h2>
          <ol>
            <li>Email <a href="mailto:privacy@raktasetu.org">privacy@raktasetu.org</a> from the address associated with your account when possible.</li>
            <li>State the request type and the account phone or email. Do not send a password, authentication token, government ID number, or medical document.</li>
            <li>The operator should acknowledge the request, verify identity proportionately, evaluate legal exceptions, and respond within the applicable deadline.</li>
          </ol>
          <p>
            The operating organization must adopt this workflow, monitor the inbox, and
            document request outcomes. The application provides the entry point but
            cannot establish those operational procedures by itself.
          </p>
        </section>
      </article>
    </PublicShell>
  );
}
