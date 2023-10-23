import { styled, css } from 'styled-components';

import bgPath from 'images/authbg.jpg';
import bgRetinaPath from 'images/authbg@2x.jpg';

import { breakpoints } from 'styling/breakpoints';
const { desktop } = breakpoints;

export const Page = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      height: calc(100vh - ${theme.sizes.headerHeight});

      @media screen and (min-width: ${desktop}) {
        flex-direction: row;
        width: 100%;
      }
    `;
  }}
`;

export const BannerSide = styled.div`
  display: none;

  @media screen and (min-width: ${desktop}) {
    display: block;
    flex-grow: 1;

    background-color: #172234;
    background: url(${bgPath});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    /* for retina displays */
    @media only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background: url(${bgRetinaPath});

      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
`;

export const FormSide = styled.div`
  min-width: 38%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
