import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { containerStyle, toastOptions } from 'services/toastOptions';
import { Toaster } from 'react-hot-toast';

import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

import SharedLayout from 'components/SharedLayout';
import NotFound from 'pages/NotFound';
import Register from 'pages/RegisterPage';
import Login from 'pages/LoginPage';

const HomePage = lazy(() => import('pages/HomePage'));
const OpenDealsPage = lazy(() => import('pages/OpenDealsPage'));

// ################################################

export default function App() {
  return (
    <>
      <Toaster containerStyle={containerStyle} toastOptions={toastOptions} />

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route
            path="deals"
            element={
              <PrivateRoute redirectTo="/login">
                <OpenDealsPage />
              </PrivateRoute>
            }
          />

          <Route
            path="register"
            element={
              <RestrictedRoute redirectTo="/deals">
                <Register />
              </RestrictedRoute>
            }
          />

          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/deals">
                <Login />
              </RestrictedRoute>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
