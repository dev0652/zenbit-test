import { useEffect } from 'react';
import { EmptyResults, Gallery } from 'components';

import { OpenDealsSection, SectionTitle } from './OpenDeals.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectProperties } from 'redux/selectors';
import { fetchPropertiesOp } from 'redux/properties/operations';
import { Container } from 'components/SharedLayout/SharedLayout.styled';

// ******** Component *************************

export const OpenDeals = () => {
  const dispatch = useDispatch();
  const { items, error } = useSelector(selectProperties);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchPropertiesOp())
        .unwrap()
        .catch(({ message }) => console.error(message));
    }
  }, [dispatch, items.length]);

  return (
    <OpenDealsSection id="openDeals">
      <Container>
        <SectionTitle>Open Deals</SectionTitle>

        {items.length > 0 ? (
          <Gallery data={items} />
        ) : (
          <EmptyResults isError={!!error} />
        )}
      </Container>
    </OpenDealsSection>
  );
};
