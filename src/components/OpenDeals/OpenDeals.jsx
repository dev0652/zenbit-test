import { useCallback, useEffect, useState } from 'react';
// import { properties } from 'data';
import { EmptyResults, Gallery, Loader } from 'components';
import { fetchProperties } from 'services/api';

import { OpenDealsSection, SectionTitle } from './OpenDeals.styled';

// ******** Component *************************

export const OpenDeals = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [properties, setProperties] = useState(null);

  const getAllProperties = useCallback(async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const data = await fetchProperties();
      setProperties(data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Get all open deals
  useEffect(() => {
    getAllProperties();
  }, [getAllProperties]);

  return (
    <>
      {isLoading && <Loader />}

      <OpenDealsSection id="openDeals">
        <SectionTitle>Open Deals</SectionTitle>

        {properties ? (
          <Gallery data={properties} />
        ) : (
          <EmptyResults isError={isError} />
        )}
      </OpenDealsSection>
    </>
  );
};
