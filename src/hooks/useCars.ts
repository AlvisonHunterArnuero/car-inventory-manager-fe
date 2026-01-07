import { useQuery } from '@apollo/client';
import { GET_CARS } from '../graphql/queries';

export function useCars() {
  const { data, loading, error } = useQuery(GET_CARS);
  return {
    cars: data?.cars || [],
    loading,
    error,
  };
}
