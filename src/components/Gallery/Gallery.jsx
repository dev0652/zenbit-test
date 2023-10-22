import { Card } from 'components';
import { CardList } from './Gallery.styled';
import PropTypes from 'prop-types';

export const Gallery = ({ data }) => {
  return (
    <CardList>
      {data.map(item => (
        <li key={item._id}>
          <Card item={item} />
        </li>
      ))}
    </CardList>
  );
};

// ****** PropTypes *******************************

Gallery.propTypes = {
  data: PropTypes.array,
};
