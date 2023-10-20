import { styled } from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 3px;

  font-size: 14px;
  font-weight: 700;
  line-height: 142.857%;

  color: ${({ theme }) => theme.colors.blackish};
`;

export const Field = styled.input`
  padding: 0 20px;
  height: 48px;

  /* border: none; */
  border: 2px solid ${({ theme }) => theme.colors.lightBg};
  border-radius: ${({ theme }) => theme.borderRadius.regular};

  font-family: 'Lato';
  font-size: 20px;
  line-height: 2;

  background-color: ${({ theme }) => theme.colors.lightBg};

  &::placeholder {
    color: ${({ theme }) => theme.colors.blackish};
    opacity: 0.5;

    font-family: 'Lato';
    font-size: 14px;
    line-height: 157.143%;
  }
`;
