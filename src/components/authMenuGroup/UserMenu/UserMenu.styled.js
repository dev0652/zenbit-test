import { styled } from 'styled-components';

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
