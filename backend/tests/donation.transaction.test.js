import test from 'node:test';
import assert from 'node:assert/strict';
import { completeDonationInTransaction } from '../src/services/donationService.js';

function fakeClient({ responseStatus = 'arrived', existingDonation = false, failCredit = false } = {}) {
  const state = { inserts: [], updates: [] };
  return {
    state,
    async query(sql, params) {
      if (sql.includes('FROM hospitals')) return { rows: [{ id: 'hospital-a', approval_status: 'approved' }] };
      if (sql.includes('FROM blood_requests') && sql.includes('FOR UPDATE')) {
        return { rows: [{ id: 'request-a', hospital_id: 'hospital-a', blood_group: 'O+', status: 'open' }] };
      }
      if (sql.includes('FROM donor_responses') && sql.includes('FOR UPDATE')) {
        return responseStatus === 'missing' ? { rows: [] } : { rows: [{ id: 'response-a', status: responseStatus }] };
      }
      if (sql.includes('SELECT id FROM donations')) return { rows: existingDonation ? [{ id: 'donation-old' }] : [] };
      if (sql.includes('hospital_donor_blood_group')) return { rows: [{ blood_group: 'O+' }] };
      if (sql.includes('hospital_record_donor_donation')) return { rows: [{}] };
      if (failCredit && sql.includes('INSERT INTO credits')) throw new Error('credit failed');
      if (sql.includes('INSERT INTO')) state.inserts.push({ sql, params });
      if (sql.includes('UPDATE')) state.updates.push({ sql, params });
      if (sql.includes('INSERT INTO donations')) return { rows: [{ id: params[0], credits_earned: 100 }] };
      return { rows: [], rowCount: 1 };
    },
  };
}

test('only arrived responses can be completed', async () => {
  const client = fakeClient({ responseStatus: 'accepted' });
  await assert.rejects(
    completeDonationInTransaction(client, {
      actor: { id: 'hospital-user', hospital_id: 'hospital-a' },
      requestId: 'request-a',
      donorId: 'donor-a',
      units: 1,
    }),
    (error) => error.status === 409,
  );
  assert.equal(client.state.inserts.length, 0);
});

test('completion derives blood group and writes exactly one donation and credit', async () => {
  const client = fakeClient();
  await completeDonationInTransaction(client, {
    actor: { id: 'hospital-user', hospital_id: 'hospital-a' },
    requestId: 'request-a',
    donorId: 'donor-a',
    units: 1,
  });
  assert.equal(client.state.inserts.filter(({ sql }) => sql.includes('INSERT INTO donations')).length, 1);
  assert.equal(client.state.inserts.filter(({ sql }) => sql.includes('INSERT INTO credits')).length, 1);
  assert.equal(client.state.inserts.find(({ sql }) => sql.includes('INSERT INTO donations')).params.includes('O+'), true);
});

test('replay is rejected before any inserts', async () => {
  const client = fakeClient({ existingDonation: true });
  await assert.rejects(
    completeDonationInTransaction(client, {
      actor: { id: 'hospital-user', hospital_id: 'hospital-a' },
      requestId: 'request-a',
      donorId: 'donor-a',
      units: 1,
    }),
    (error) => error.status === 409,
  );
  assert.equal(client.state.inserts.length, 0);
});
