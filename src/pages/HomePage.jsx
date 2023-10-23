import { Helmet } from 'react-helmet-async';

import { useSelector } from 'react-redux';
import { selectProperties } from 'redux/selectors';

import { Hero, OpenDeals } from 'components';

// ***************************************************

const HomePage = () => {
  const { isLoading } = useSelector(selectProperties);

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Find best property investment properties at ZB Real Estate"
        />
      </Helmet>

      <Hero />

      {!isLoading && <OpenDeals />}
    </>
  );
};

export default HomePage;
