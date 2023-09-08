import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the footer with the correct text', () => {
    const { getByText } = render(<Footer />);
    
    const footerTextElement = getByText('This is the footer');

    expect(footerTextElement).toBeInTheDocument();
  });
});
