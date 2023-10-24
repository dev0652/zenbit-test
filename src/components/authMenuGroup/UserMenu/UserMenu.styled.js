import { styled, css } from 'styled-components';

import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

export const BurgerButton = styled.button`
  border: none;
  color: silver;
  background-color: transparent;

  &:hover {
  }
`;

export const BurgerIcon = styled(RxHamburgerMenu)`
  height: 36px;
  width: 36px;
`;

export const CloseIcon = styled(AiOutlineClose)`
  height: 36px;
  width: 36px;
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
      /* justify-content: center; */
      padding-top: 25vh;

      /* background-color: ${theme.colors.blackish}; */
      background-color: rgba(23, 34, 52, 0.8);
      backdrop-filter: blur(55px);

      transition: transform 300ms linear;

      transform: ${open ? 'translateX(0)' : 'translateX(100vw)'};
    `;
  }}
`;
