import { styled } from 'styled-components';
import { BaseButton } from 'styling/buttons';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  color: white;
`;

export const UserName = styled.p`
  font-weight: bold;
`;

export const LogoutButton = styled(BaseButton)`
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  padding: 11px 30px;
  font-size: 16px;

  &:hover,
  &:focus-visible {
    color: white;
  }
`;
