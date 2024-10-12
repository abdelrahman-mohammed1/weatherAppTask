import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        results: [
          {
            urls: {
              full: 'https://example.com/city.jpg',
            },
          },
        ],
      }),
  })
);

test('fetches and displays city image', async () => {
  render(<App />);
  await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
  expect(screen.getByRole('img')).toHaveAttribute(
    'src',
    'https://example.com/city.jpg'
  );
});
