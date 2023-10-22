import { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth, selectProperties } from 'redux/selectors';
import { Outlet, useLocation } from 'react-router-dom';

import { UserBar, AuthNav } from 'components';

import { Loading } from 'notiflix/build/notiflix-loading-aio';
import loaderOptions from 'services/loaderOptions';

import { AppBar, AppBarWrapper, Container } from './SharedLayout.styled';
import { logout, refresh } from 'redux/auth/operations';

// ***************************************************

export const SharedLayout = () => {
  const { isLoading } = useSelector(selectProperties);
  const { isLoggedIn, isRefreshing, user, token } = useSelector(selectAuth);

  // ******* Token check *******

  const dispatch = useDispatch();

  useEffect(() => {
    if (token && !user.name)
      dispatch(refresh(token))
        .unwrap()
        .catch(() => dispatch(logout())); // log out if token is outdated
  }, [dispatch, token, user]);

  // ******* Location check *******

  let location = useLocation();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const path = location.pathname;

    if (path === '/login' || path === '/register') {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [location]);

  return (
    <>
      <AppBar>
        <Container>
          <AppBarWrapper>
            {isLoggedIn ? <UserBar /> : isAuth ? null : <AuthNav />}
          </AppBarWrapper>
        </Container>
      </AppBar>

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
