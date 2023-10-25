import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';

import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { ThemeProvider } from 'styled-components';
import { theme } from 'styling/theme';

import { App } from 'components/App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/zenbit-test">
          <HelmetProvider>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </HelmetProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
