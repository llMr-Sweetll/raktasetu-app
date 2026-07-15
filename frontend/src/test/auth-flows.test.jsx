import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import GoogleOnboarding from '../screens/GoogleOnboarding.jsx';
import HospitalPending from '../screens/HospitalPending.jsx';

const completeGoogleOnboarding = vi.fn();
vi.mock('../hooks/useAuth.js', () => ({
  useAuth: () => ({ completeGoogleOnboarding }),
}));

afterEach(() => {
  cleanup();
  sessionStorage.clear();
  completeGoogleOnboarding.mockReset();
});

describe('identity state screens', () => {
  it('explains that hospital access remains blocked pending approval', () => {
    render(<MemoryRouter><HospitalPending /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: /application is pending/i })).toBeInTheDocument();
    expect(screen.getByText(/sign-in remains blocked/i)).toBeInTheDocument();
  });

  it('requires explicit consent before Google onboarding submits', async () => {
    sessionStorage.setItem('google_onboarding_token', 'a'.repeat(48));
    render(<MemoryRouter><GoogleOnboarding /></MemoryRouter>);
    fireEvent.change(screen.getByLabelText('Phone'), { target: { value: '+919876543210' } });
    fireEvent.change(screen.getByLabelText('Date of birth'), { target: { value: '1990-01-01' } });
    fireEvent.change(screen.getByLabelText('City'), { target: { value: 'Hubballi' } });
    fireEvent.click(screen.getByRole('button', { name: /create donor account/i }));
    expect(await screen.findByRole('alert')).toHaveTextContent(/consent is required/i);
    expect(completeGoogleOnboarding).not.toHaveBeenCalled();
  });
});
