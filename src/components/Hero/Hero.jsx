import {
  Anchor,
  Section,
  HeroContainer,
  HomeText,
  HomeTitle,
} from './Hero.styled';

export const Hero = () => {
  return (
    <Section>
      <HeroContainer>
        <HomeTitle>The chemical negatively charged</HomeTitle>

        <HomeText>
          Numerous calculations predict, and experiments confirm, that the force
          field reflects the beam, while the mass defect is not formed. The
          chemical compound is negatively charged. While the mass defect is
        </HomeText>

        <Anchor href="#openDeals">Get Started</Anchor>
      </HeroContainer>
    </Section>
  );
};
