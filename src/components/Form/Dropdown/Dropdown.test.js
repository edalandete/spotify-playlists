/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '../../../assets/test-utils';
import Dropdown from './index';
import DROPDOWNDATA from '../../../assets/dropdown.mock';

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

describe('Dropdown Component', () => {
  test('should contain default option how old you want to be', () => {
    render(<Dropdown
      category={DROPDOWNDATA[0].category}
      defaultOption={DROPDOWNDATA[1].defaultOption}
      options={DROPDOWNDATA[0].options}
    />, container);

    expect(screen.getByText(/How old you want to be/i)).toBeInTheDocument();
  });
  test('should contain category rock', () => {
    render(<Dropdown
      category={DROPDOWNDATA[0].category}
      defaultOption={DROPDOWNDATA[0].defaultOption}
      options={DROPDOWNDATA[0].options}
    />, container);

    expect(screen.getByText(/rock/i)).toBeInTheDocument();
  });
  test('should contain option very slow ', () => {
    render(<Dropdown
      category={DROPDOWNDATA[0].category}
      defaultOption={DROPDOWNDATA[0].defaultOption}
      options={DROPDOWNDATA[2].options}
    />, container);

    expect(screen.getByText(/very slow/i)).toBeInTheDocument();
  });
});
