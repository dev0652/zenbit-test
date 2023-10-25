import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';
import { Outlet } from 'react-router-dom';

import { Loading } from 'notiflix/build/notiflix-loading-aio';
import loaderOptions from 'services/loaderOptions';

import { refresh } from 'redux/auth/operations';
import { Header } from 'components';

// ***************************************************

export const SharedLayout = () => {
  const { isRefreshing, user, token } = useSelector(selectAuth);

  // ******* Token check *******

  const dispatch = useDispatch();

  useEffect(() => {
    if (token && !user.name)
      dispatch(refresh())
        .unwrap()
        .catch(localStorage.removeItem('persist:auth')); // clear LS if token is outdated
  }, [dispatch, token, user.name]);

  useEffect(() => {
    document.body.style.marginTop = '80px';
  }, []);

  return (
    <>
      <Header />

      <Suspense
        fallback={isRefreshing ? Loading.dots(loaderOptions) : Loading.remove()}
      >
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
