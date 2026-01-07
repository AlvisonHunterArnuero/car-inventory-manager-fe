import {
  render,
  screen,
  fireEvent,
  within,
  waitFor,
} from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { CarDashboard } from '../CarDashboard';
import { GET_CARS } from '../../graphql/queries';

const mocks = [
  {
    request: { query: GET_CARS },
    result: {
      data: {
        cars: [
          {
            id: '1',
            make: 'Audi',
            model: 'Q5',
            year: 2023,
            color: 'Blue',
            mobile: '',
            tablet: '',
            desktop: '',
          },
        ],
      },
    },
  },
];

describe('CarDashboard Integration', () => {
  it('allows a user to search for a car', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CarDashboard />
      </MockedProvider>
    );

    const searchInput = await screen.findByLabelText(/Search Model/i);
    fireEvent.change(searchInput, { target: { value: 'Q5' } });

    expect(screen.getByText('Audi Q5')).toBeInTheDocument();
  });

  it('opens the modal and adds a new car', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CarDashboard />
      </MockedProvider>
    );

    const addButton = await screen.findByText(/Add New Car/i);
    fireEvent.click(addButton);

    const dialog = await screen.findByRole('dialog');
    const { getByLabelText, getByText } = within(dialog);

    fireEvent.change(getByLabelText(/Make/i), {
      target: { value: 'Tesla' },
    });

    fireEvent.change(getByLabelText(/Model/i), {
      target: { value: 'Model 3' },
    });

    fireEvent.change(getByLabelText(/Year/i), {
      target: { value: '2024' },
    });

    fireEvent.change(getByLabelText(/Color/i), {
      target: { value: 'Red' },
    });

    fireEvent.click(getByText(/Create/i));

    await waitFor(() => {
      expect(screen.getByText('Tesla Model 3')).toBeInTheDocument();
    });
  });
});
