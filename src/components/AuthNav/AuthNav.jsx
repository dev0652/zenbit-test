import { FilledNavLink, StyledNavLink } from 'styling/links';
import { Wrapper } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <StyledNavLink to="/login">Log in</StyledNavLink>
      <FilledNavLink to="/register">Sign Up</FilledNavLink>
    </Wrapper>
  );
};
