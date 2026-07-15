import { Link } from 'react-router-dom';

export default function HospitalPending() {
  return (
    <main className="auth-flow">
      <section className="auth-flow__card" aria-labelledby="hospital-pending-title">
        <p className="auth-flow__eyebrow">Hospital verification</p>
        <h1 id="hospital-pending-title">Your application is pending</h1>
        <p>RaktaSetu reviews the hospital license and submitted details before enabling operational access. Sign-in remains blocked until an administrator approves this application.</p>
        <p>Approval updates are handled manually during this MVP. Contact <a href="mailto:privacy@raktasetu.org">privacy@raktasetu.org</a> if your submitted details need correction.</p>
        <Link className="auth-flow__button-link" to="/login?role=hospital">Return to hospital sign in</Link>
      </section>
    </main>
  );
}
