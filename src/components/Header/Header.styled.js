import { styled, css } from 'styled-components';
import { breakpoints } from 'styling/breakpoints';
const { tablet, desktop } = breakpoints;

export const Logo = styled.p`
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
`;

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

  nav {
    display: flex;
    gap: 10px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MobileMenu = styled.div`
  ${({ theme, open }) => {
    return css`
      position: absolute;
      top: ${theme.sizes.headerHeight};
      right: 0;
      bottom: 0;
      left: 0;

      /* width: 80vw; */
      height: calc(100vh - ${theme.sizes.headerHeight});

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      /* background-color: ${theme.colors.blackish}; */
      background-color: rgba(23, 34, 52, 0.8);
      backdrop-filter: blur(55px);

      transition: transform 300ms linear;

      transform: ${open ? 'translateX(0)' : 'translateX(100vw)'};
    `;
  }}
`;
