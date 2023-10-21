import { properties } from 'data';
import Gallery from 'components/Gallery';
import { OpenDealsSection, SectionTitle } from './OpenDeals.styled';

export default function OpenDeals({ data }) {
  return (
    <OpenDealsSection id="openDeals">
      <SectionTitle>Open Deals</SectionTitle>
      <Gallery data={properties} />
    </OpenDealsSection>
  );
}
