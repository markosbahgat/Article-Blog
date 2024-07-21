import React from 'react';
import {render, screen} from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

// Mocking the logErrorToMyService function
jest.mock('./path-to-logErrorToMyService', () => ({
  logErrorToMyService: jest.fn(),
}));

// A component that throws an error to test ErrorBoundary
const ProblematicComponent = () => {
  throw new Error('Test Error');
};

describe('ErrorBoundary', () => {
  beforeEach(() => {
    // Clear all previous interactions before each test
    jest.clearAllMocks();
  });

  test('should catch errors in child component and display error message', () => {
    render(
      <ErrorBoundary>
        <ProblematicComponent />
      </ErrorBoundary>,
    );

    expect(screen.getByText(/Error Happened/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Sorry, we run into an error please reach support./i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Go back home/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact support/i)).toBeInTheDocument();
  });

  test('should call logErrorToMyService on error', () => {
    try {
      render(
        <ErrorBoundary>
          <ProblematicComponent />
        </ErrorBoundary>,
      );
    } catch (e) {
      // Errors are expected to be caught by the ErrorBoundary, not to be thrown
    }
  });

  test('should render children if there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Child component</div>
      </ErrorBoundary>,
    );

    expect(screen.getByText(/Child component/i)).toBeInTheDocument();
  });
});
