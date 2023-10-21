import styled from 'styled-components';
import { breakpoints } from 'styling/breakpoints';

// const mobile = breakpoints.mobile;
const tablet = breakpoints.tablet;
const desktop = breakpoints.desktop;
const desktopWide = breakpoints.desktopWide;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  /* @media screen and (max-width: (${tablet} - 1)) {
    min-width: calc(100vw - 40px);
  } */

  /* @media screen and (min-width: ${tablet}) {
    width: ${tablet};
  } */

  @media screen and (min-width: ${desktop}) {
    width: ${desktop};
  }

  /* @media screen and (min-width: ${desktopWide}) {
    width: ${desktopWide};
  } */

  width: 100%;
`;

export const AppBarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const AppBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: end;

  height: ${({ theme }) => theme.sizes.headerHeight};
  padding: 0 80px;
  background-color: ${({ theme }) => theme.colors.blackish};

  nav {
    display: flex;
    gap: 10px;
  }
`;
