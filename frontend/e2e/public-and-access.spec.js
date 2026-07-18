import { expect, test } from '@playwright/test';

test('public trust and auth routes are responsive', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.goto('/login');
  await expect(page.getByRole('button', { name: /sign in/i })).toBeVisible();
  await page.goto('/privacy');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

test('protected hospital route rejects an anonymous session', async ({ page }) => {
  await page.goto('/console');
  await expect(page).toHaveURL(/login/);
});

test('configured role identities cannot cross role boundaries', async ({ request }) => {
  const baseURL = process.env.E2E_BASE_URL;
  const donorIdentifier = process.env.E2E_DONOR_IDENTIFIER;
  const donorPassword = process.env.E2E_DONOR_PASSWORD;
  test.skip(!baseURL || !donorIdentifier || !donorPassword, 'Staging donor identity is not configured');

  const payload = donorIdentifier.includes('@')
    ? { email: donorIdentifier, password: donorPassword }
    : { phone: donorIdentifier, password: donorPassword };
  const login = await request.post(`${baseURL}/api/auth/login`, { data: payload });
  expect(login.ok()).toBeTruthy();
  const session = await login.json();
  const denied = await request.get(`${baseURL}/api/hospital/requests`, {
    headers: { Authorization: `Bearer ${session.data.token}` },
  });
  expect(denied.status()).toBe(403);
});
