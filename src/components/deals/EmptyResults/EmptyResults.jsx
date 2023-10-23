import { Icon, Message, Wrapper } from './EmptyResults.styled';
import PropTypes from 'prop-types';

export const EmptyResults = ({ isError }) => {
  const message = isError
    ? 'Error fetching data from server. Please try again later'
    : 'Sorry, there is nothing to display here';

  return (
    <Wrapper>
      <Icon />
      <Message>{message}</Message>
    </Wrapper>
  );
};

// ****** PropTypes *******************************

EmptyResults.propTypes = {
  isError: PropTypes.bool,
};
