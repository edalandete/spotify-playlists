/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '../../assets/test-utils';
import Header from '.';

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

describe('Header Component', () => {
  test('should contain title Welcome to Dream List', () => {
    render(<Header />, container);

    expect(screen.getByText(/Please, log in/i)).toBeInTheDocument();
  });
});
