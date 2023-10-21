import { styled } from 'styled-components';

export const CardWrapper = styled.article`
  position: relative;

  width: 630px;
  height: 400px;

  border: 1px solid white;
  border-radius: ${({ theme }) => theme.borderRadius.regular};

  display: flex;
  flex-direction: column;
  gap: 5px;

  color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  &:hover {
    box-shadow: inset 5rem 1rem black;
    cursor: pointer;
  }
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
  columns: 3;

  font-family: Lato;
  font-size: 18px;
  font-weight: 700;
  line-height: 122.222%;
`;
