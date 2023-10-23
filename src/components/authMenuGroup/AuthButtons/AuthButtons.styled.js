import { styled } from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  gap: 10px;
  flex-direction: ${({ $mobile }) => ($mobile ? 'column' : 'row')};
`;
