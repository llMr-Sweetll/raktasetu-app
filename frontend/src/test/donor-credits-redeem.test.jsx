import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DonorCredits from '../screens/DonorCredits.jsx';
import api from '../api/client.js';

vi.mock('../api/client.js', () => ({
  default: {
    get: vi.fn(),
    post: vi.fn(),
  },
}));

vi.mock('../components/BottomNav.jsx', () => ({
  default: () => null,
}));

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe('DonorCredits redeem happy path', () => {
  it('creates a redemption and shows code + QR', async () => {
    api.get.mockImplementation(async (path) => {
      if (path === '/donor/credits') {
        return { data: { data: { balance: 150, history: [{ id: 'c1', amount: 100, type: 'earned', description: 'Verified blood donation', created_at: '2026-07-18T00:00:00Z' }] } } };
      }
      if (path === '/donor/family') {
        return { data: { data: { members: [] } } };
      }
      if (path === '/donor/redemptions') {
        return { data: { data: { redemptions: [] } } };
      }
      return { data: { data: {} } };
    });
    api.post.mockResolvedValue({
      data: {
        data: {
          code: 'RSC-ABCD1234',
          redemption: {
            id: 'red-1',
            status: 'active',
            credits_amount: 100,
            family_member_id: null,
            created_at: '2026-07-19T00:00:00Z',
            expires_at: '2026-07-20T00:00:00Z',
          },
        },
      },
    });

    render(
      <MemoryRouter>
        <DonorCredits />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('credits-balance')).toHaveTextContent('150');
    });

    fireEvent.click(screen.getByTestId('redeem-submit').querySelector('button'));

    await waitFor(() => {
      expect(screen.getByTestId('redeem-code')).toHaveTextContent('RSC-ABCD1234');
    });
    expect(screen.getByTestId('redeem-qr')).toHaveAttribute('data-ref-code', 'RSC-ABCD1234');
    expect(api.post).toHaveBeenCalledWith('/donor/redemptions', { family_member_id: null });
  });
});
