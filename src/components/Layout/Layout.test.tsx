import React from 'react';
import {render, screen} from '@testing-library/react';
import Layout from './Layout';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

jest.mock('components/Header/Header', () => <Header />);
jest.mock('components/Footer/Footer', () => <Footer />);

describe('Layout Component', () => {
  test('renders Header, children and Footer', () => {
    render(
      <Layout>
        <div>Test Children</div>
      </Layout>,
    );

    // Check for Header
    expect(screen.getByText('Mocked Header')).toBeInTheDocument();

    // Check for children content
    expect(screen.getByText('Test Children')).toBeInTheDocument();

    // Check for Footer
    expect(screen.getByText('Mocked Footer')).toBeInTheDocument();
  });

  test('maintains the structure and styling', () => {
    const {container} = render(
      <Layout>
        <div>Content</div>
      </Layout>,
    );

    // Check that the layout div has the correct classes
    expect(container.firstChild).toHaveClass(
      'w-full flex flex-col items-start justify-start h-screen',
    );
  });
});
