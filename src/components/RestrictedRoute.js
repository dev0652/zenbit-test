import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuth } from 'redux/selectors';

export const RestrictedRoute = ({ children, redirectTo = '/' }) => {
  const { isLoggedIn } = useSelector(selectAuth);

  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};
