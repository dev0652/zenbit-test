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

export const UserBar = () => {
  const {
    user: { name, email },
  } = useSelector(selectAuth);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout(email));
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
};
