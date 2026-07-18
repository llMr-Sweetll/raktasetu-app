/** India NBTC/NACO whole-blood donation deferral (days). */
export const NBTC_MALE_INTERVAL_DAYS = 90;
export const NBTC_FEMALE_INTERVAL_DAYS = 120;

/**
 * Interval after a verified whole-blood donation before the next donation.
 * Unknown/null sex uses the conservative female interval.
 */
export function nbtcIntervalDays(sex) {
  return sex === 'male' ? NBTC_MALE_INTERVAL_DAYS : NBTC_FEMALE_INTERVAL_DAYS;
}

export function isDonorEligible(nextEligibleDate, now = new Date()) {
  if (!nextEligibleDate) return true;
  return new Date(nextEligibleDate) <= now;
}
