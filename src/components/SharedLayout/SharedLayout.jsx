import { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth, selectDeals } from 'redux/selectors';
import { Outlet, useLocation } from 'react-router-dom';

import UserBar from 'components/UserBar';
import AuthNav from 'components/AuthNav';

import { Loading } from 'notiflix/build/notiflix-loading-aio';
import loaderOptions from 'services/loaderOptions';

import { AppBar, AppBarWrapper, Container } from './SharedLayout.styled';
import { logout, refresh } from 'redux/auth/operations';

// ***************************************************

export default function SharedLayout() {
  const { isLoading } = useSelector(selectDeals);
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
        <Container>
          <Suspense
            fallback={
              isLoading ? Loading.dots(loaderOptions) : Loading.remove()
            }
          >
            <main>
              <Outlet />
            </main>
          </Suspense>
        </Container>
      )}
    </>
  );
}
