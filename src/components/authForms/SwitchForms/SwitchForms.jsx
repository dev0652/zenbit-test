import { StyledLink } from 'styling/links';
import { SwitchFormsText } from './SwitchForms.styled';

import PropTypes from 'prop-types';

export const SwitchForms = ({ condition }) => {
  let message, linkTo, buttonText;

  if (condition) {
    message = 'Already have an account?';
    linkTo = '/login';
    buttonText = 'Log in';
  } else {
    message = "Don't have an account?";
    linkTo = '/register';
    buttonText = 'Sign up';
  }

  return (
    <SwitchFormsText>
      {message} <StyledLink to={linkTo}>{buttonText}</StyledLink>
    </SwitchFormsText>
  );
};

// ****** PropTypes *******************************

SwitchForms.propTypes = {
  condition: PropTypes.bool,
};
