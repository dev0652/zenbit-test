import { styled, css } from 'styled-components';

import bgPath from 'images/homebg.jpg';
import bgRetinaPath from 'images/homebg@2x.jpg';

export const Wrapper = styled.div`
  ${({ theme }) => {
    return css`
      height: calc(100vh - ${theme.sizes.headerHeight});

      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      justify-content: center;
      padding-bottom: 20vh;

      color: white;

      background-color: ${({ theme }) => theme.colors.blackish};

      background: linear-gradient(
          0deg,
          rgba(23 34 52 / 60%),
          rgba(23 34 52 / 60%)
        ),
        url(${bgPath});

      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;

      /* for retina displays */
      @media only screen and (min-resolution: 192dpi),
        only screen and (min-resolution: 2dppx) {
        background: linear-gradient(
            0deg,
            rgba(23 34 52 / 60%),
            rgba(23 34 52 / 60%)
          ),
          url(${bgRetinaPath});
      }
    `;
  }}
`;

//https://css-tricks.com/snippets/css/retina-display-media-query/

export const HomeTitle = styled.h1`
  font-size: 64px;
  font-weight: 700;
  line-height: 125%;
  text-align: center;
`;

export const HomeText = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  line-height: 133.333%;
  letter-spacing: -0.48px;
  text-align: center;
`;

export const Anchor = styled.a`
  padding: 10px 24px;
  border: 1px solid white;
  border-radius: 8px;

  font-size: 20px;
  font-weight: 700;
  line-height: 170%;

  color: white;
  text-decoration: none;

  &:hover,
  &:focus-visible {
    color: black;
    background-color: white;
  }

  &:active {
    color: darkSlateGray;

    border-color: silver;
    background-color: silver;
  }
`;
