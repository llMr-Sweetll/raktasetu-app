import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LazyBloodBridge from '../components/LazyBloodBridge.jsx';
import PublicShell from '../components/PublicShell.jsx';
import { useAuth } from '../hooks/useAuth.js';
import usePageMeta from '../hooks/usePageMeta.js';
import { roleHome } from '../lib/roleHome.js';

const STEPS = [
  {
    number: '01',
    title: 'Set your availability',
    text: 'Create a donor profile, add your blood group and location, then choose when you are available to receive nearby requests.',
  },
  {
    number: '02',
    title: 'Review a matching request',
    text: 'When a participating hospital sends a compatible request, you can review the location and urgency before deciding whether to respond.',
  },
  {
    number: '03',
    title: 'Complete hospital screening',
    text: 'Travel only after confirming the request. Hospital staff make the final eligibility decision and record a completed donation.',
  },
];

export default function Landing() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  usePageMeta({
    title: 'RaktaSetu | Connecting blood donors and hospitals',
    description: 'RaktaSetu helps willing blood donors and participating hospitals coordinate compatible blood requests in real time.',
    path: '/',
  });

  useEffect(() => {
    if (loading || !user) return;
    navigate(roleHome(user), { replace: true });
  }, [user, loading, navigate]);

  useEffect(() => {
    const section = new URLSearchParams(location.search).get('section');
    if (!section) return;
    window.requestAnimationFrame(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.search]);

  return (
    <PublicShell overlayHeader>
      <section className="public-hero" aria-labelledby="landing-title">
        <div className="public-hero__scene">
          <LazyBloodBridge />
        </div>
        <div className="public-hero__veil" />
        <div className="public-hero__inner">
          <div>
            <p className="public-eyebrow">A living bridge for blood donation</p>
            <h1 id="landing-title">
              Be ready when <span>your blood group</span> is needed nearby.
            </h1>
            <p className="public-hero__copy">
              RaktaSetu helps willing donors and participating hospitals coordinate
              compatible blood requests. You choose when you are available and which
              requests you can answer.
            </p>
            <div className="public-actions">
              <Link className="public-button public-button--primary" to="/register">
                Join as a donor
              </Link>
              <Link className="public-button public-button--secondary" to="/?section=how-it-works">
                See how it works
              </Link>
            </div>
            <p className="public-hero__note">
              RaktaSetu does not replace emergency services or hospital screening.
              Call your local emergency number when urgent medical help is required.
            </p>
          </div>
        </div>
      </section>

      <aside className="trust-strip" aria-label="Service principles">
        <div className="trust-strip__inner">
          <div className="trust-item">
            <strong>You control availability</strong>
            <span>Go on call only when you are ready to consider a request.</span>
          </div>
          <div className="trust-item">
            <strong>Matches use blood group and distance</strong>
            <span>Request visibility is limited to practical compatibility and location.</span>
          </div>
          <div className="trust-item">
            <strong>Hospitals make the final decision</strong>
            <span>Clinical screening and donation acceptance happen at the hospital.</span>
          </div>
        </div>
      </aside>

      <section className="public-section public-section--paper" id="mission" aria-labelledby="mission-title">
        <div className="public-section__inner">
          <div className="section-heading">
            <p className="section-label">Why RaktaSetu exists</p>
            <div>
              <h2 className="section-title" id="mission-title">
                A clearer path from willingness to action.
              </h2>
              <p className="section-copy">
                Blood donation depends on people who are willing to help and hospitals
                that know what is needed. RaktaSetu gives both sides a shared,
                time-sensitive channel without asking donors to stay permanently on call.
              </p>
            </div>
          </div>
          <div className="mission-grid">
            <article className="mission-block">
              <small>Mission</small>
              <h3>Help hospitals reach compatible, available donors when a blood request is active.</h3>
            </article>
            <article className="mission-block">
              <small>Vision</small>
              <h3>A dependable donor network where more people can respond with confidence and context.</h3>
            </article>
          </div>
        </div>
      </section>

      <section className="public-section public-section--ink" id="how-it-works" aria-labelledby="how-title">
        <div className="public-section__inner">
          <div className="section-heading">
            <p className="section-label">For donors</p>
            <div>
              <h2 className="section-title" id="how-title">Three steps, with a decision at every stage.</h2>
              <p className="section-copy">
                A request is an invitation to review, not an obligation to donate.
                You remain in control until hospital staff complete their screening.
              </p>
            </div>
          </div>
          <ol className="steps">
            {STEPS.map((step) => (
              <li className="step" key={step.number}>
                <span className="step__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="public-section" id="safety" aria-labelledby="safety-title">
        <div className="public-section__inner">
          <div className="section-heading">
            <p className="section-label">Trust and responsibility</p>
            <div>
              <h2 className="section-title" id="safety-title">Useful coordination needs honest boundaries.</h2>
              <p className="section-copy">
                RaktaSetu is designed to support donor coordination. It cannot guarantee
                hospital participation, donor availability, clinical eligibility, or a
                successful match.
              </p>
            </div>
          </div>
          <div className="safety-grid">
            <article className="safety-item">
              <h3>Minimum necessary sharing</h3>
              <p>
                Account, blood group, location, and response information are used to
                provide matching and coordination features. We do not sell personal data.
              </p>
            </article>
            <article className="safety-item">
              <h3>Role-based access</h3>
              <p>
                Donor, hospital, and administrative routes enforce separate server-side
                permissions. A visible screen alone does not grant data access.
              </p>
            </article>
            <article className="safety-item">
              <h3>Readiness, not certification</h3>
              <p>
                The service includes technical safeguards and draft policies. Legal,
                contractual, and operational reviews are still required.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="public-cta" aria-labelledby="cta-title">
        <div className="public-cta__inner">
          <div>
            <h2 id="cta-title">Your decision to be available can shorten the search.</h2>
            <p>
              Create a donor profile now, then choose when you are ready to receive
              compatible requests in your area.
            </p>
          </div>
          <Link className="public-button public-button--primary" to="/register">
            Create donor account
          </Link>
        </div>
      </section>
    </PublicShell>
  );
}
