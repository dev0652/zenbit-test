import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BaseCardLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 1.3rem;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  text-align: center;

  padding: 11px 0px;
  width: 160px;

  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.regular};

  font-weight: 700;
  line-height: 137.5%;

  color: ${({ theme }) => theme.colors.accent};

  &:hover,
  &:focus-visible {
    color: white;
    background-color: ${({ theme }) => theme.colors.accent};
  }

  &:active {
    color: white;
    background-color: ${({ theme }) => theme.colors.accentDark};
  }
`;

export const FilledNavLink = styled(StyledNavLink)`
  color: white;
  background-color: ${({ theme }) => theme.colors.accent};

  &:hover,
  &:focus-visible {
    --color: ${({ theme }) => theme.colors.accentDark};

    border-color: var(--color);
    background-color: var(--color);
  }

  &:active {
    --color: ${({ theme }) => theme.colors.accentDarker};

    border-color: var(--color);
    background-color: var(--color);
  }
`;
