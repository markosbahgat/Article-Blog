import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header'; // Adjust the import path based on your project structure

describe('Header Component', () => {
  beforeEach(() => {
    // Set initial theme to light mode
    localStorage.setItem('theme', 'light');
  });

  test('should render the Header component', () => {
    render(<Header />);
    expect(screen.getByText('Ready To Read')).toBeInTheDocument();
    expect(screen.getByAltText('Your Company')).toBeInTheDocument();
    expect(screen.getByText('Trending')).toBeInTheDocument();
    expect(screen.getByText('Most viewed')).toBeInTheDocument();
    expect(screen.getByText('Marketplace')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
  });

  test('should open and close mobile menu', () => {
    render(<Header />);

    // Open mobile menu
    fireEvent.click(screen.getByRole('button', {name: /open main menu/i}));
    expect(screen.getByText('Trending')).toBeVisible();

    // Close mobile menu
    fireEvent.click(screen.getByRole('button', {name: /close menu/i}));
    expect(screen.queryByText('Trending')).not.toBeVisible();
  });

  test('should toggle dark mode', () => {
    render(<Header />);

    // Initially, it should be in light mode
    expect(screen.getByText('Dark Mode')).toBeInTheDocument();
    expect(screen.getByRole('img', {name: /moon icon/i})).toBeInTheDocument();

    // Toggle to dark mode
    fireEvent.click(screen.getByText('Dark Mode'));
    expect(screen.getByText('Light Mode')).toBeInTheDocument();
    expect(screen.getByRole('img', {name: /sun icon/i})).toBeInTheDocument();
  });

  test('should toggle dark mode in mobile menu', () => {
    render(<Header />);

    // Open mobile menu
    fireEvent.click(screen.getByRole('button', {name: /open main menu/i}));

    // Initially, it should be in light mode
    expect(screen.getByText('Dark Mode')).toBeInTheDocument();
    expect(screen.getByRole('img', {name: /moon icon/i})).toBeInTheDocument();

    // Toggle to dark mode in mobile menu
    fireEvent.click(screen.getByText('Dark Mode'));
    expect(screen.getByText('Light Mode')).toBeInTheDocument();
    expect(screen.getByRole('img', {name: /sun icon/i})).toBeInTheDocument();

    // Close mobile menu
    fireEvent.click(screen.getByRole('button', {name: /close menu/i}));

    // Ensure dark mode persists after closing menu
    expect(screen.getByText('Light Mode')).toBeInTheDocument();
    expect(screen.getByRole('img', {name: /sun icon/i})).toBeInTheDocument();
  });
});
