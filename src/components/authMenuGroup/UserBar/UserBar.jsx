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
import toast from 'react-hot-toast';

export const UserBar = () => {
  const {
    user: { name, email },
  } = useSelector(selectAuth);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout({ email }))
      .unwrap()
      .then(() => toast.success('You have signed out of your account'))
      .catch(msg => toast.error(msg, { duration: 4000 }));
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
