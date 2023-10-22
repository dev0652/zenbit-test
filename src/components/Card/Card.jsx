import { CardWrapper, Details, Image, Meta, Title } from './Card.styled';
import placeholderImage from 'images/placeholder-image.jpg';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Card = ({ item }) => {
  const [isImageError, setIsImageError] = useState(false);
  console.log('isImageError: ', isImageError);

  const {
    propertyName,
    price,
    ticketPrice,
    yield: yieldValue,
    sold,
    daysLeft,
    imageLink,
  } = item;

  const formattedPrice = formatPrice(price);
  const formattedTicketPrice = formatPrice(ticketPrice);

  const formattedYield = formatPercentage(yieldValue);
  const formattedSold = formatPercentage(sold);

  // /* offset-x | offset-y | blur-radius | color */

  return (
    <CardWrapper>
      <Image
        src={imageLink || placeholderImage}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = placeholderImage;
          setIsImageError(true);
        }}
        width={630}
        height={400}
        alt={propertyName}
      />
      <Meta
        style={{
          color: `${isImageError ? 'black' : 'white'}`,
          textShadow: `${
            isImageError ? 'none' : '1px 1px 15px black, -1px -1px 15px black'
          }`,
        }}
      >
        <Title>{propertyName}</Title>
        <Details>
          <li>{formattedPrice}</li>
          <li>Ticket - {formattedTicketPrice}</li>
          <li>Yield {formattedYield}</li>
          <li>Days left {daysLeft}</li>
          <li>Sold {formattedSold}</li>
        </Details>
      </Meta>
    </CardWrapper>
  );
};

const formatPrice = number => `${number.toLocaleString('uk-UA')} Dhs`;
const options = { style: 'unit', unit: 'percent' };
const formatPercentage = number => `${number.toLocaleString('en-US', options)}`;

// ****** PropTypes *******************************

Card.propTypes = {
  item: PropTypes.shape({
    propertyName: PropTypes.string,
    price: PropTypes.number,
    ticketPrice: PropTypes.number,
    yield: PropTypes.number,
    daysLeft: PropTypes.number,
    sold: PropTypes.number,
    imageLink: PropTypes.string,
  }),
};
