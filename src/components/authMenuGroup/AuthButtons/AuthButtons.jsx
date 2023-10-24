import { FilledAuthPageLink, AuthPageLink } from 'styling/links';
import { Wrapper } from './AuthButtons.styled';
import PropTypes from 'prop-types';

export const AuthButtons = ({ isMobile = false, menuToggler = null }) => {
  return (
    <Wrapper
    // $mobile={isMobile}
    >
      <AuthPageLink to="/login" onClick={isMobile && menuToggler}>
        Log in
      </AuthPageLink>

      <FilledAuthPageLink to="/register" onClick={isMobile && menuToggler}>
        Sign Up
      </FilledAuthPageLink>
    </Wrapper>
  );
};

// ****** PropTypes *******************************

AuthButtons.propTypes = {
  isMobileView: PropTypes.bool,
};
