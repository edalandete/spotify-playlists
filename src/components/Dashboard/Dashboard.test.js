/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '../../assets/test-utils';
import Dashboard from '.';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Dashboard Component', () => {
  test('should contain title Welcome to Dream List', () => {
    render(<Dashboard />, container);

    expect(screen.getByText(/Welcome to Dream List/i)).toBeInTheDocument();
  });
  test('should exist ul html element', () => {
    render(<Dashboard />, container);

    expect(screen.getByText(/Lets see to which playlist do you listen/)).toBeTruthy();
  });
});
