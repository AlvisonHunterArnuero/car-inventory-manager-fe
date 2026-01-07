import { render, screen } from '@testing-library/react';
import { CarCard } from '../CarCard';
import { resizeScreen } from '../../test/test-utils';

const mockCar = {
  model: 'Q5',
  mobile: 'mobile-img.jpg',
  desktop: 'desktop-img.jpg',
};

test('shows mobile image when screen is small', () => {
  resizeScreen(400);
  render(<CarCard car={mockCar} />);

  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', 'mobile-img.jpg');
});

test('shows desktop image when screen is large', () => {
  resizeScreen(1200);
  render(<CarCard car={mockCar} />);

  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', 'desktop-img.jpg');
});
