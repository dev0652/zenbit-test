import { styled, css } from 'styled-components';

export const AppBarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  z-index: 21;

  @media screen and (min-width: 1440px) {
    padding-top: 22.5px;
    padding-bottom: 22.5px;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 24px;
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
  padding: 0 80px;
  background-color: ${({ theme }) => theme.colors.blackish};

  nav {
    display: flex;
    gap: 10px;
  }
`;

export const MobileMenu = styled.div`
  ${({ theme, open }) => {
    return css`
      position: fixed;
      top: ${theme.sizes.headerHeight};
      right: 0;
      bottom: 0;
      left: 0;

      z-index: 100;

      /* width: 80vw; */
      height: calc(100vh - ${theme.sizes.headerHeight});

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      /* background-color: rgba(23, 34, 52, 0.6);
  backdrop-filter: blur(30px); */
      background-color: ${({ theme }) => theme.colors.blackish};

      transition: transform 300ms linear;

      transform: ${({ open }) =>
        open ? 'translateX(0)' : 'translateX(-100%)'};
    `;
  }}
`;
