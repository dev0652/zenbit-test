import { Home } from 'components';
import { Helmet } from 'react-helmet-async';

// ***************************************************

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Find best property investment deals at ZB Real Estate"
        />
      </Helmet>

      <Home />
    </>
  );
};

export default HomePage;
