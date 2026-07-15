import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import { T } from '../theme.js';

const body = "'Public Sans', 'Segoe UI', system-ui, sans-serif";
const display = "'Anek Latin', 'Segoe UI', system-ui, sans-serif";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  const Section = ({ title, children }) => (
    <div style={{ marginBottom: 24 }}>
      <h2 style={{ fontFamily: display, fontWeight: 800, fontSize: 16, color: T.ink, margin: '0 0 8px' }}>{title}</h2>
      <div style={{ fontFamily: body, fontSize: 13.5, color: T.mut, lineHeight: 1.6 }}>
        {children}
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', padding: '24px 20px 40px', background: T.porcelain }}>
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 18, fontFamily: body, fontSize: 13, color: T.mut }}>
          <ArrowLeft size={16} /> Back
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <Shield size={22} color={T.oxblood} />
          <h1 style={{ fontFamily: display, fontWeight: 800, fontSize: 22, color: T.ink, margin: 0 }}>Privacy Policy</h1>
        </div>
        <p style={{ fontFamily: body, fontSize: 12, color: T.faint, margin: '0 0 24px' }}>Last updated: {new Date().toLocaleDateString()}</p>

        <Section title="1. Data We Collect">
          <p>We collect the following personal and health data during registration and use:</p>
          <ul style={{ paddingLeft: 20, margin: '8px 0' }}>
            <li><strong>Identity:</strong> Full name, date of birth</li>
            <li><strong>Contact:</strong> Phone number, email address</li>
            <li><strong>Health:</strong> Blood group (donors only)</li>
            <li><strong>Location:</strong> City, state, and approximate geolocation for matching</li>
            <li><strong>Usage:</strong> Donation history, response times, verification status</li>
          </ul>
        </Section>

        <Section title="2. Purpose of Processing">
          <p>Your data is processed solely for the following purposes:</p>
          <ul style={{ paddingLeft: 20, margin: '8px 0' }}>
            <li>Matching blood donors with nearby hospitals in emergencies</li>
            <li>Verifying donor identity and eligibility</li>
            <li>Maintaining donation records and credit tracking</li>
            <li>Sending emergency blood request notifications</li>
            <li>Compliance with applicable health regulations</li>
          </ul>
        </Section>

        <Section title="3. Data Sharing">
          <p>We do not sell your data. Information is shared only as follows:</p>
          <ul style={{ paddingLeft: 20, margin: '8px 0' }}>
            <li><strong>Matched hospitals:</strong> When you accept a donation request, the hospital receives your name, blood group, and a masked phone number. Your full phone number is only revealed after you confirm arrival.</li>
            <li><strong>Service providers:</strong> Our database is hosted on Neon (US-based cloud PostgreSQL). No third-party analytics or advertising trackers are used.</li>
            <li><strong>Legal obligations:</strong> We may disclose data if required by law or to protect vital interests.</li>
          </ul>
        </Section>

        <Section title="4. Your Rights (DPDP Act 2023)">
          <p>Under India's Digital Personal Data Protection Act, 2023, you have the right to:</p>
          <ul style={{ paddingLeft: 20, margin: '8px 0' }}>
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Correction:</strong> Update inaccurate or incomplete information</li>
            <li><strong>Erasure:</strong> Request deletion of your account and associated data</li>
            <li><strong>Withdraw consent:</strong> Opt out of data processing at any time</li>
            <li><strong>Grievance redressal:</strong> File a complaint with our Data Protection Officer</li>
          </ul>
          <p>To exercise any of these rights, contact us at the email below.</p>
        </Section>

        <Section title="5. Data Retention">
          <p>We retain your personal data for <strong>3 years</strong> after your last activity (donation, login, or profile update). After this period, your data is automatically anonymized or deleted, unless longer retention is required by law.</p>
        </Section>

        <Section title="6. Security Measures">
          <p>We implement industry-standard security practices:</p>
          <ul style={{ paddingLeft: 20, margin: '8px 0' }}>
            <li>Passwords are hashed using bcrypt</li>
            <li>All API communications use HTTPS/TLS encryption</li>
            <li>Phone numbers are masked in hospital-facing interfaces</li>
            <li>Access to donor health data is restricted to matched hospitals only</li>
          </ul>
        </Section>

        <Section title="7. Cross-Border Data Transfer">
          <p>Our database is hosted on <strong>Neon Postgres</strong> in the United States. By using RaktaSetu, you consent to the transfer and storage of your data in the US, which may have different data protection laws than India. We ensure adequate safeguards are in place through our service provider's security certifications.</p>
        </Section>

        <Section title="8. Contact & Grievances">
          <p>For privacy-related questions, data access requests, or grievances:</p>
          <p style={{ margin: '8px 0' }}>
            <strong>Privacy:</strong> privacy@raktasetu.org<br />
            <strong>Support:</strong> support@raktasetu.org<br />
            <strong>Data Protection Officer:</strong> RaktaSetu Trust, Bengaluru, Karnataka<br />
            <strong>Live app:</strong> https://raktasetu-production.up.railway.app/
          </p>
          <p>If you are unsatisfied with our response, you may approach the <strong>Data Protection Board of India</strong>.</p>
        </Section>

        <div style={{ marginTop: 32, padding: '14px 16px', background: T.arterialSoft, borderRadius: 12, border: '1px solid #F3C9D0' }}>
          <p style={{ fontFamily: body, fontSize: 12.5, color: T.arterial, margin: 0, lineHeight: 1.5 }}>
            <strong>Consent reminder:</strong> By registering, you explicitly consent to the processing of your personal and health data for blood donation matching purposes. You may withdraw consent at any time by deleting your account.
          </p>
        </div>
      </div>
    </div>
  );
}
