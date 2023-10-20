import React from 'react';
import { HomeText, HomeTitle, StyledLink, Wrapper } from './Home.styled';
import { useOutletContext } from 'react-router-dom';

export default function Home() {
  const [headerHeight] = useOutletContext();

  return (
    <Wrapper $headerHeight={headerHeight}>
      <HomeTitle>The chemical negatively charged</HomeTitle>

      <HomeText>
        Numerous calculations predict, and experiments confirm, that the force
        field reflects the beam, while the mass defect is not formed. The
        chemical compound is negatively charged. Twhile the mass defect is
      </HomeText>

      <StyledLink to="/deals">Get Started</StyledLink>
    </Wrapper>
  );
}
