import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders the footer element', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  test('renders the company copyright text', () => {
    render(<Footer />);
    const copyrightText = screen.getByText(
      /© 2020 Your Company, Inc. All rights reserved./i,
    );
    expect(copyrightText).toBeInTheDocument();
  });

  test('renders all navigation links with correct icons and labels', () => {
    render(<Footer />);
    const links = [
      {name: 'Facebook', iconLabel: 'Facebook'},
      {name: 'Instagram', iconLabel: 'Instagram'},
      {name: 'X', iconLabel: 'X'},
      {name: 'GitHub', iconLabel: 'GitHub'},
      {name: 'YouTube', iconLabel: 'YouTube'},
    ];

    links.forEach(link => {
      const navLink = screen.getByLabelText(link.name);
      expect(navLink).toBeInTheDocument();
      expect(navLink).toHaveAttribute('href', '#');
    });
  });

  test('all icons are rendered correctly', () => {
    render(<Footer />);
    const icons = screen.getAllByRole('img');
    expect(icons.length).toBe(5);
  });
});
