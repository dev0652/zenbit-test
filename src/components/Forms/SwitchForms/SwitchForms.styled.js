import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const SwitchFormsText = styled.p`
  ${({ theme }) => theme.colors.blackish};
  text-align: center;
  font-family: Lato;
  font-size: 14px;
  font-weight: 600;
  line-height: 157.143%;
`;

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
