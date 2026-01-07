import { renderHook, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { useCars } from '../useCars';
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

describe('useCars Hook', () => {
  it('should return loading state initially', () => {
    const { result } = renderHook(() => useCars(), {
      wrapper: ({ children }) => (
        <MockedProvider mocks={mocks}>{children}</MockedProvider>
      ),
    });
    expect(result.current.loading).toBe(true);
  });

  it('should return cars data after fetching', async () => {
    const { result } = renderHook(() => useCars(), {
      wrapper: ({ children }) => (
        <MockedProvider mocks={mocks}>{children}</MockedProvider>
      ),
    });

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.cars).toHaveLength(1);
    expect(result.current.cars[0].model).toBe('Q5');
  });
});
