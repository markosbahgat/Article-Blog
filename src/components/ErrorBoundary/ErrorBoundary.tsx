import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// Assuming logErrorToMyService is a function that logs errors to a service
function logErrorToMyService(error: Error, errorInfo: React.ErrorInfo) {
  console.error('Error:', error, 'Error Info:', errorInfo);
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    console.log(error);
    return {hasError: true};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="grid min-h-full place-items-center bg-[color:var(--title)] px-6 py-24 sm:py-32 lg:px-8 w-full">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">300 - 500</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-[color:var(--background)] sm:text-5xl">
              Error Happened
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Sorry, we run into an error please reach support.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-[color:var(--title)] shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Go back home
              </a>
              <a
                href="/"
                className="text-sm font-semibold text-[color:var(--background)]">
                Contact support <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
