import { screen, render } from '@testing-library/react';
import React, { useState as useStateMock } from 'react'
import CarsGallery from '../pages/carsGallery';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}))

describe('Render method', () => {
  const setState = jest.fn()
  beforeEach(() => {
    useStateMock.mockImplementation(init => [init, setState])
  })
  test('should have rendered and have error image', async () => {

  render(<CarsGallery />)

    expect(screen.getByRole('img', { name: /error_page/, hidden: true })).toBeInTheDocument();

  });
});