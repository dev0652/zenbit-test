import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';

import { LogoutButton, UserName, Wrapper } from './UserBar.styled';
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
      <UserName>{name}</UserName>
      <LogoutButton type="button" onClick={handleLogout}>
        Sign Out
      </LogoutButton>
    </Wrapper>
  );
}
