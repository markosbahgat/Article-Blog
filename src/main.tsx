import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import './styles/App.css';

import {persistor, store} from './store';
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from 'pages/Routes';
import {getCurrentTheme, loadTheme} from 'utils/getCurrentTheme';
import {PersistGate} from 'redux-persist/integration/react';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

const container = document.getElementById('root')!;
const root = createRoot(container);
window.addEventListener('DOMContentLoaded', () => {
  loadTheme(getCurrentTheme());
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {() => (
          <BrowserRouter>
            <ErrorBoundary>
              <AppRoutes />
            </ErrorBoundary>
          </BrowserRouter>
        )}
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
