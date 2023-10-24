import { styled } from 'styled-components';
import { breakpoints } from 'styling/breakpoints';
const { tablet } = breakpoints;

export const Wrapper = styled.nav`
  display: flex;
  gap: 30px;
  flex-direction: column;
  /* ${({ $mobile }) => ($mobile ? 'column' : 'row')}; */

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    gap: 10px;
  }
`;
