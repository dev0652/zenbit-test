import { CardWrapper, Details, Image, Meta, Title } from './Card.styled';

export default function Card({ item }) {
  const {
    propertyName,
    price,
    ticketPrice,
    yield: yieldValue,
    sold,
    daysLeft,
    imagePath,
  } = item;

  const formattedPrice = formatPrice(price);
  const formattedTicketPrice = formatPrice(ticketPrice);

  const formattedYield = formatPercentage(yieldValue);
  const formattedSold = formatPercentage(sold);

  return (
    <CardWrapper>
      <Image src={imagePath} alt={propertyName} />
      <Meta>
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
}

const formatPrice = number => `${number.toLocaleString('uk-UA')} Dhs`;
const options = { style: 'unit', unit: 'percent' };
const formatPercentage = number => `${number.toLocaleString('en-US', options)}`;
