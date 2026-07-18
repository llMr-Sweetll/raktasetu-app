const ACCOUNT_FIELDS = [
  'id',
  'email',
  'phone',
  'name',
  'role',
  'blood_group',
  'date_of_birth',
  'sex',
  'latitude',
  'longitude',
  'city',
  'state',
  'is_verified',
  'is_on_call',
  'ping_radius_km',
  'last_donation_date',
  'next_eligible_date',
  'consent_given',
  'consent_given_at',
  'consent_policy_version',
  'consent_source',
  'created_at',
  'updated_at',
];

function selectFields(value, fields) {
  if (!value) return null;
  return fields.reduce((result, field) => {
    if (value[field] !== undefined) result[field] = value[field];
    return result;
  }, {});
}

export function buildAccountExport(records, exportedAt = new Date().toISOString()) {
  return {
    exported_at: exportedAt,
    account: selectFields(records.user, ACCOUNT_FIELDS),
    hospital: records.hospital || null,
    blood_requests: records.bloodRequests || [],
    donations: records.donations || [],
    responses: records.responses || [],
    credits: records.credits || [],
    family_members: records.familyMembers || [],
    notifications: records.notifications || [],
  };
}
