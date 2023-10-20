import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';

export default function OpenDealsPage() {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <>
      <Helmet>
        <title>Open Deals</title>
        <meta name="description" content="Open Deals at ZB Real Estate" />
      </Helmet>

      <div>Open Deals</div>
      <div>Gallery</div>

      {/* {isLoggedIn && <OpenDeals />} */}
    </>
  );
}
