import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }

  &:active {
    color: ${({ theme }) => theme.colors.accentDark};
  }
`;

export const AuthPageLink = styled(Link)`
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

export const FilledAuthPageLink = styled(AuthPageLink)`
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
