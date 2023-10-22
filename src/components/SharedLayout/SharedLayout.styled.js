import styled from 'styled-components';
import { breakpoints } from 'styling/breakpoints';

const { mobile, tablet, desktop, desktopWide } = breakpoints;

export const Container = styled.div`
  @media screen and (min-width: ${mobile}) {
    width: ${mobile};

    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: ${tablet}) {
    width: ${tablet};
  }

  @media screen and (min-width: ${desktop}) {
    width: ${desktop};
  }

  @media screen and (min-width: ${desktopWide}) {
    width: ${desktopWide};
  }
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
