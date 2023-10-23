import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectAuth } from 'redux/selectors';
import PropTypes from 'prop-types';

import { AuthButtons, UserBar } from 'components';
import { RxHamburgerMenu as BurgerIcon } from 'react-icons/rx';
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';
import { MobileMenu } from 'components/Header/Header.styled';

export const UserMenu = ({ isMobile }) => {
  const { isLoggedIn } = useSelector(selectAuth);

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

  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  useEffect(() => {
    if (mobileMenuVisible) {
      document.body.classList.add('mobile-menu-open');
    }
    if (!mobileMenuVisible) {
      document.body.classList.remove('mobile-menu-open');
    }
  }, [mobileMenuVisible]);

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  const burgerMenuButton = (
    <button type="button" onClick={toggleMobileMenu}>
      {mobileMenuVisible ? <CloseIcon /> : <BurgerIcon />}
    </button>
  );

  const userMenu = isLoggedIn ? (
    <UserBar />
  ) : isAuth ? null : (
    <AuthButtons isMobile={isMobile} menuToggler={toggleMobileMenu} />
  );

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  return (
    <>
      {isMobile ? burgerMenuButton : userMenu}

      {isMobile && <MobileMenu open={mobileMenuVisible}>{userMenu}</MobileMenu>}
    </>
  );
};

// ****** PropTypes *******************************

UserMenu.propTypes = {
  isMobile: PropTypes.bool,
};
