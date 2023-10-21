import { styled, css } from 'styled-components';

import bgPath from 'images/authbg.jpg';
import bgRetinaPath from 'images/authbg@2x.jpg';

export const Page = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      width: 100%;
      height: calc(100vh - ${theme.sizes.headerHeight});
    `;
  }}
`;

export const BannerSide = styled.div`
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
  }
`;

export const FormSide = styled.div`
  min-width: 38%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
