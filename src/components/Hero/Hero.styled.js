import { styled, css } from 'styled-components';

import bgPath from 'images/homebg.jpg';
import bgRetinaPath from 'images/homebg@2x.jpg';
import { Container } from 'components/SharedLayout/SharedLayout.styled';

import { theme } from 'styling/theme';

import { breakpoints } from 'styling/breakpoints';
const { tablet, desktop, desktopWide } = breakpoints;

export const Section = styled.section`
  ${({ theme }) => {
    return css`
      height: calc(100vh - ${theme.sizes.headerHeight});

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

        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    `;
  }}
`;

//https://css-tricks.com/snippets/css/retina-display-media-query/

export const HeroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding-bottom: 20vh;

  height: 100%;
  color: white;
`;

export const HomeTitle = styled.h1`
  font-size: 36px;

  @media screen and (min-width: ${tablet}) {
    font-size: 42px;
  }
  @media screen and (min-width: ${desktop}) {
    font-size: 54px;
  }
  @media screen and (min-width: ${desktopWide}) {
    font-size: 64px;
  }

  font-weight: 700;
  line-height: 125%;
  text-align: center;
`;

export const HomeText = styled.p`
  font-family: 'Lato', sans-serif;
  line-height: 133.333%;
  letter-spacing: -0.48px;
  text-align: center;

  font-size: 19px;

  @media screen and (min-width: ${tablet}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${desktopWide}) {
    font-size: 24px;
  }
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

// export const SpinnerWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// export const SpinnerText = styled.p`
//   font-family: Merriweather;
//   font-size: 1.1rem;
//   font-weight: bold;
//   color: ${theme.colors.accent};

//   text-shadow: 1px 1px 10px black;
// `;

export const SpinnerContainer = styled.div`
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
