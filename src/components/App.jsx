import { Routes, Route } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { lazy } from 'react';

import { containerStyle, toastOptions } from 'services/toastOptions';
import { Toaster } from 'react-hot-toast';

import { SharedLayout } from 'components';
import { NotFound } from 'pages/NotFound';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

// ***************************************************

export const App = () => {
  return (
    <>
      <Toaster containerStyle={containerStyle} toastOptions={toastOptions} />

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route
            path="register"
            element={
              <RestrictedRoute redirectTo="/">
                <RegisterPage />
              </RestrictedRoute>
            }
          />

          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/">
                <LoginPage />
              </RestrictedRoute>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
