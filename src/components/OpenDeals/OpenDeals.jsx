// import { properties } from 'data';
import Gallery from 'components/Gallery';
import { OpenDealsSection, SectionTitle } from './OpenDeals.styled';
import { useCallback, useEffect, useState } from 'react';
import { fetchProperties } from 'services/api';
import Loader from 'components/Loader';
import { EmptyResults } from 'components/EmptyResults';

export default function OpenDeals({ data }) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // ******** Get open deals *************************

  const [properties, setProperties] = useState(null);

  const getAllProperties = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const { data } = await fetchProperties();
      setProperties(data);
    } catch ({ message }) {
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Get all open deals
  useEffect(() => getAllProperties(), [getAllProperties]);

  return (
    <>
      {isLoading && <Loader />}

      <OpenDealsSection id="openDeals">
        <SectionTitle>Open Deals</SectionTitle>

        {error && <p>{error}</p>}

        {properties ? <Gallery data={properties} /> : <EmptyResults />}

        <Gallery data={properties} />
      </OpenDealsSection>
    </>
  );
}
