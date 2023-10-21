import { Routes, Route } from 'react-router-dom';
import RestrictedRoute from './RestrictedRoute';
import { lazy } from 'react';

import SharedLayout from 'components/SharedLayout';
import { containerStyle, toastOptions } from 'services/toastOptions';
import { Toaster } from 'react-hot-toast';

import NotFound from 'pages/NotFound';

const HomePage = lazy(() => import('pages/HomePage'));
const Login = lazy(() => import('pages/LoginPage'));
const Register = lazy(() => import('pages/RegisterPage'));

// ***************************************************

export default function App() {
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
                <Register />
              </RestrictedRoute>
            }
          />

          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/">
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
