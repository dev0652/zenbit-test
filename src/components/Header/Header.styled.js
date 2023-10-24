import { styled } from 'styled-components';
import { breakpoints } from 'styling/breakpoints';
import { StyledLink } from 'styling/links';
const { tablet, desktop } = breakpoints;

export const AppBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: end;

  height: ${({ theme }) => theme.sizes.headerHeight};
  background-color: ${({ theme }) => theme.colors.blackish};

  padding: 0 20px;

  @media screen and (min-width: ${tablet}) {
    padding: 0 40px;
  }

  @media screen and (min-width: ${desktop}) {
    padding: 0 80px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLink = styled(StyledLink)`
  color: ${({ theme }) => theme.colors.accent};
  line-height: 121.429%;
  font-family: Lato;
  font-weight: bold;

  font-size: 22px;

  @media screen and (min-width: ${tablet}) {
    font-size: 24px;
  }

  @media screen and (min-width: ${desktop}) {
    font-size: 28px;
  }

  &:hover,
  &:focus-visible {
    text-decoration: none;
    color: silver;
  }

  &:active {
    color: ${({ theme }) => theme.colors.accentDark};
  }
`;
