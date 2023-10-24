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

export const Thumbnail = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  transition: background-color 300ms;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  ${CardWrapper}:hover & {
    background-color: rgba(23, 34, 52, 0.3);
  }
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  height: 100%;
  width: 100%;

  padding: 0 0 20px 14px;
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
