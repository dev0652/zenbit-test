import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';

import { properties } from 'data';
import Gallery from 'components/Gallery';

import styled from 'styled-components';

const PageTitle = styled.h2`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 28px;
  font-weight: 700;
  line-height: 121.429%;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export default function OpenDealsPage() {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <>
      <Helmet>
        <title>Open Deals</title>
        <meta name="description" content="Open Deals at ZB Real Estate" />
      </Helmet>

      <PageTitle>Open Deals</PageTitle>
      <Gallery data={properties} />

      {/* {isLoggedIn && <OpenDeals />} */}
    </>
  );
}
