import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PokemonCard from './';

const mockGetPokemon = jest.fn();

const mockPokemon = {
  name: 'Pikachu',
  imageUrl: 'https://example.com/pikachu.png',
};

describe('PokemonCard', () => {
  it('renders the Pokemon card with correct name and image', () => {
    const { getByText, getByAltText } = render(<PokemonCard getPokemonData={mockGetPokemon} pokemon={mockPokemon} />);
    
    const nameElement = getByText(mockPokemon.name);
    const imageElement = getByAltText(mockPokemon.name);

    expect(nameElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', mockPokemon.imageUrl);
  });

  it('calls get pokemon data when pokemon card is clicked', () => {
    const { getByText } = render(<PokemonCard getPokemonData={mockGetPokemon} pokemon={mockPokemon} />);
    const buttonElement = getByText(mockPokemon.name);

    fireEvent.click(buttonElement);

    expect(mockGetPokemon).toHaveBeenCalled();
  });
});