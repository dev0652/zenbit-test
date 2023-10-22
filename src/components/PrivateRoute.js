import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectToken } from 'redux/selectors';

export const PrivateRoute = ({ children, redirectTo }) => {
  const isToken = useSelector(selectToken);
  const location = useLocation();

  return isToken ? (
    children
  ) : (
    <Navigate to={location.state ?? redirectTo} state={location} />
  ); // take the user back to where he came from
};
