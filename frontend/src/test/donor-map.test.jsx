import { afterEach, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DonorRequests from '../screens/DonorRequests.jsx';

vi.mock('react-leaflet', () => ({
  MapContainer: ({ children }) => <div data-testid="map">{children}</div>,
  TileLayer: () => <div data-testid="tiles" />,
  CircleMarker: ({ children }) => <div data-testid="marker">{children}</div>,
  Popup: ({ children }) => <div>{children}</div>,
}));
vi.mock('../api/client.js', () => ({
  default: {
    get: vi.fn().mockResolvedValue({
      data: {
        data: {
          requests: [{
            id: 'request-1',
            blood_group: 'O+',
            urgency: 'critical',
            hospital_name: 'Test Hospital',
            latitude: 15.36,
            longitude: 75.12,
            units_needed: 1,
            distance_km: 2.4,
          }],
        },
      },
    }),
  },
}));

afterEach(cleanup);

it('renders real request coordinates when map view is selected', async () => {
  render(<MemoryRouter><DonorRequests /></MemoryRouter>);
  await waitFor(() => expect(screen.getByText('Test Hospital')).toBeInTheDocument());
  fireEvent.click(screen.getByRole('button', { name: /map/i }));
  expect(screen.getByTestId('map')).toBeInTheDocument();
  expect(screen.getByTestId('marker')).toHaveTextContent('O+');
  expect(screen.getByTestId('tiles')).toBeInTheDocument();
});
