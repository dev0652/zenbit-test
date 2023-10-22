import { useSelector } from 'react-redux';
import { selectProperties } from 'redux/selectors';

import { OpenDeals } from 'components';
import {
  Anchor,
  Hero,
  HeroContainer,
  HomeText,
  HomeTitle,
} from './Home.styled';

export const Home = () => {
  const { isLoading } = useSelector(selectProperties);
  return (
    <>
      <Hero>
        <HeroContainer>
          <HomeTitle>The chemical negatively charged</HomeTitle>

          <HomeText>
            Numerous calculations predict, and experiments confirm, that the
            force field reflects the beam, while the mass defect is not formed.
            The chemical compound is negatively charged. Twhile the mass defect
            is
          </HomeText>

          <Anchor href="#openDeals">Get Started</Anchor>
        </HeroContainer>
      </Hero>

      {!isLoading && <OpenDeals />}
    </>
  );
};
