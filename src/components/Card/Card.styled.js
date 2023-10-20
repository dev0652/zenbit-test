import { styled } from 'styled-components';

export const CardWrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.regular};

  padding: 20px 30px;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;
