import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth, selectProperties } from 'redux/selectors';
import { Outlet } from 'react-router-dom';

import { Loading } from 'notiflix/build/notiflix-loading-aio';
import loaderOptions from 'services/loaderOptions';

import { logout, refresh } from 'redux/auth/operations';
import { Header } from 'components';

// ***************************************************

export const SharedLayout = () => {
  const { isLoading } = useSelector(selectProperties);
  const { isRefreshing, user, token } = useSelector(selectAuth);

  // ******* Token check *******

  const dispatch = useDispatch();

  useEffect(() => {
    if (token && !user.name)
      dispatch(refresh(token))
        .unwrap()
        .catch(() => dispatch(logout())); // log out if token is outdated
  }, [dispatch, token, user]);

  useEffect(() => {
    document.body.style.marginTop = '80px';
  }, []);

  return (
    <>
      <Header />

      {!isRefreshing && (
        <Suspense
          fallback={isLoading ? Loading.dots(loaderOptions) : Loading.remove()}
        >
          <main>
            <Outlet />
          </main>
        </Suspense>
      )}
    </>
  );
};
