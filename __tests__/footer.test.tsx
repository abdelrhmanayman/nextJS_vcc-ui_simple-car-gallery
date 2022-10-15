
import React from 'react';
import { screen, render } from '@testing-library/react';
import { Footer } from '../src/components/Footer';

describe('Footer', () => {

  it('should have Volvo copyrights', async () => {

    render(<Footer />)

    expect(screen.getByRole('heading', { name: /© Volvo Corp. All rights reserved./})).toBeInTheDocument();

  });
});