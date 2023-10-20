import React, { Component } from 'react';
import { FilledNavLink, StyledNavLink } from 'styling/links';
import { Wrapper } from './AuthNav.styled';

export default class AuthNav extends Component {
  render() {
    return (
      <Wrapper>
        <StyledNavLink to="/login">Log in</StyledNavLink>
        <FilledNavLink to="/register">Sign Up</FilledNavLink>
      </Wrapper>
    );
  }
}
