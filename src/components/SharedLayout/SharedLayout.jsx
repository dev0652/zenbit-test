import { Suspense, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth, selectDeals } from 'redux/selectors';
import { Outlet } from 'react-router-dom';

import UserBar from 'components/UserBar';
import AuthNav from 'components/AuthNav';

import { Loading } from 'notiflix/build/notiflix-loading-aio';
import loaderOptions from 'services/loaderOptions';

import { AppBar, AppBarWrapper, Container } from './SharedLayout.styled';
import { logout, refresh } from 'redux/auth/operations';

// ##############################

export default function SharedLayout() {
  const { isLoading } = useSelector(selectDeals);
  const { isLoggedIn, isRefreshing, user, token } = useSelector(selectAuth);

  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(null);

  useEffect(() => {
    const header = headerRef.current;
    const { height } = header.getBoundingClientRect();
    setHeaderHeight(height);
  }, [headerHeight]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token && !user.name)
      dispatch(refresh(token))
        .unwrap()
        .catch(() => dispatch(logout())); // log out if token is outdated
  }, [dispatch, token, user]);

  return (
    <>
      <AppBar className="header" ref={headerRef}>
        <Container>
          <AppBarWrapper>
            {isLoggedIn ? <UserBar /> : <AuthNav />}
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
              <Outlet context={[headerHeight]} />
            </main>
          </Suspense>
        </Container>
      )}
    </>
  );
}
