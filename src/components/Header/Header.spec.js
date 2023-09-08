import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the header with the correct title and logo', () => {
    const { getByText, getByAltText } = render(<Header />);
    
    const titleElement = getByText('Pokedex');
    const logoElement = getByAltText('pokemon-logo');

    expect(titleElement).toBeInTheDocument();
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', '/Pokemon-Logo.png');
  });
});
