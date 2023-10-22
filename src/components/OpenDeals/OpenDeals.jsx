import { useEffect } from 'react';
import { EmptyResults, Gallery, Loader } from 'components';

import { OpenDealsSection, SectionTitle } from './OpenDeals.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectProperties } from 'redux/selectors';
import { fetchPropertiesOp } from 'redux/properties/operations';

// ******** Component *************************

export const OpenDeals = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectProperties);

  useEffect(() => {
    dispatch(fetchPropertiesOp())
      .unwrap()
      .catch(({ message }) => console.error(message));
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}

      <OpenDealsSection id="openDeals">
        <SectionTitle>Open Deals</SectionTitle>

        {items.length > 0 ? (
          <Gallery data={items} />
        ) : (
          <EmptyResults isError={!!error} />
        )}
      </OpenDealsSection>
    </>
  );
};
