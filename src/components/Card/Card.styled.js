import { styled } from 'styled-components';
import { breakpoints } from 'styling/breakpoints';
const { tablet, desktop } = breakpoints;

export const CardWrapper = styled.article`
  position: relative;

  width: 100%;
  height: 400px;

  @media screen and (min-width: ${desktop}) {
    width: 630px;
  }

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.regular};

  display: flex;
  flex-direction: column;
  gap: 5px;

  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
  overflow: hidden;

  transition: transform 300ms;

  &:hover,
  &:focus-visible {
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 6px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
    transform: scale(1.01);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Meta = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;

  padding: 0 0 20px 14px;
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 170%;
`;

export const Details = styled.ul`
  columns: 2;

  @media screen and (min-width: ${tablet}) {
    columns: 3;
  }

  font-family: Lato;
  font-size: 18px;
  font-weight: 700;
  line-height: 122.222%;
`;
