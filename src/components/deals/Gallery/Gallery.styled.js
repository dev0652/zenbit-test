import styled from 'styled-components';
import { breakpoints } from 'styling/breakpoints';
const { desktop } = breakpoints;

export const CardList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: ${desktop}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  /* flex-basis: 250px; */
  gap: 20px;
`;
