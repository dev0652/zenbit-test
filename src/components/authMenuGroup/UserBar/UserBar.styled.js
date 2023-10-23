import { styled } from 'styled-components';
import { BaseButton } from 'styling/buttons';
import { FaUserCircle } from 'react-icons/fa';

import { breakpoints } from 'styling/breakpoints';
const { tablet } = breakpoints;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  gap: 60px;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    gap: 30px;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  color: white;
`;

export const UserIcon = styled(FaUserCircle)`
  height: 30px;
  width: 30px;
`;

export const UserName = styled.p`
  font-family: Lato;
  font-weight: bold;
  font-size: 18px;
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
