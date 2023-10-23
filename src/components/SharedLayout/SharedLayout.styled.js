import { styled } from 'styled-components';
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
