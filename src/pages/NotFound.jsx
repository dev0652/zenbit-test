import { Error404 } from 'components';
import { Helmet } from 'react-helmet-async';

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Not found</title>
        <meta name="description" content="Page not found" />
      </Helmet>

      <Error404 />
    </>
  );
};
