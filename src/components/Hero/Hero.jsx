import {
  Anchor,
  Section,
  HeroContainer,
  HomeText,
  HomeTitle,
  SpinnerContainer,
  SpinnerText,
  SpinnerWrapper,
} from './Hero.styled';

import { useSelector } from 'react-redux';
import { selectProperties } from 'redux/selectors';

export const Hero = () => {
  const { isLoading } = useSelector(selectProperties);

  return (
    <Section>
      <HeroContainer>
        <HomeTitle>The chemical negatively charged</HomeTitle>

        <HomeText>
          Numerous calculations predict, and experiments confirm, that the force
          field reflects the beam, while the mass defect is not formed. The
          chemical compound is negatively charged. While the mass defect is
        </HomeText>

        {isLoading ? (
          <SpinnerWrapper>
            <SpinnerContainer>
              <div className="dot-pulse"></div>
            </SpinnerContainer>

            <SpinnerText>Awaiting response from render.com ...</SpinnerText>
          </SpinnerWrapper>
        ) : (
          <Anchor href="#openDeals">Get Started</Anchor>
        )}
      </HeroContainer>
    </Section>
  );
};
