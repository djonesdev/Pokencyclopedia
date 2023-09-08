import { renderHook, act, waitFor } from '@testing-library/react';
import pokemonApi from '../api/pokemon'; // You may need to mock axios or use a library like axios-mock-adapter
import usePokemon from './usePokemon';

// Mock axios and axios.get function
jest.mock('../api/pokemon');
const mockGetPokemon = pokemonApi;

const mockResponse = {
  data: {
    results: [
      { name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
      // Add more mock data as needed
    ],
  },
};

describe('usePokemon', () => {

  it('should fetch and return Pokemon data', async () => {
    console.log(mockResponse, 'mockResponse XXXXXXXXX')
    mockGetPokemon.getPokemon.mockResolvedValue(mockResponse);
    const { result } = renderHook(() => usePokemon({}));
    
    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.pokemon).toEqual([
        {
          name: 'Pikachu',
          url: 'https://pokeapi.co/api/v2/pokemon/25/',
          imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        },
        // Add more expectations for other Pokemon data
      ]);
    });
  });

  it('should handle API errors', async () => {
    const errorMessage = 'API Error';
    mockGetPokemon.getPokemon.mockRejectedValue(new Error(errorMessage));
    
    const { result } = renderHook(() => usePokemon({}));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error.message).toBe(errorMessage);
      expect(result.current.pokemon).toBe(null);
    });
  });

  it('should fetch more Pokemon data when loadMore is called', async () => {
    const { result } = renderHook(() => usePokemon({}));

    await waitFor(() => {
      act(() => {
        result.current.loadMore();
      });
    });

    await waitFor(() => {
      // Check that more Pokemon data has been loaded
      expect(result.current.pokemon.length).toBeGreaterThan(1);
    });
  });
});
