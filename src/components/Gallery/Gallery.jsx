import Card from 'components/Card';
import React from 'react';
import { CardList } from './Gallery.styled';

export default function Gallery({ data }) {
  return (
    <CardList>
      {data.map(item => (
        <li key={item.id}>
          <Card
            item={item}
            // onLoadComplete={onLoadComplete}
          />
        </li>
      ))}
    </CardList>
  );
}
