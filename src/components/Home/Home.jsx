import { OpenDeals } from 'components';
import { Anchor, HomeText, HomeTitle, Wrapper } from './Home.styled';

export const Home = () => {
  return (
    <>
      <Wrapper>
        <HomeTitle>The chemical negatively charged</HomeTitle>

        <HomeText>
          Numerous calculations predict, and experiments confirm, that the force
          field reflects the beam, while the mass defect is not formed. The
          chemical compound is negatively charged. Twhile the mass defect is
        </HomeText>

        <Anchor href="#openDeals">Get Started</Anchor>
      </Wrapper>

      <OpenDeals />
    </>
  );
};
