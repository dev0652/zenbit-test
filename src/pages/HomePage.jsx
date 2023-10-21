import Home from 'components/Home';
import { Helmet } from 'react-helmet-async';

// ***************************************************

export default function HomePage() {
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
}
