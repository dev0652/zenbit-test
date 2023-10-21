import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';

import {
  UserIcon,
  UserName,
  Wrapper,
  LogoutButton,
  User,
} from './UserBar.styled';
import { logout } from 'redux/auth/operations';

export default function UserBar() {
  const {
    user: { name },
  } = useSelector(selectAuth);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Wrapper>
      <User>
        <UserIcon />
        <UserName>{name}</UserName>
      </User>
      <LogoutButton type="button" onClick={handleLogout}>
        Sign Out
      </LogoutButton>
    </Wrapper>
  );
}
