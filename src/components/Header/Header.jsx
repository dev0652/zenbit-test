import useWindowDimensions from 'hooks/useWindowDimensions';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { AppBar, HeaderWrapper, Logo } from './Header.styled';
import { UserMenu } from 'components';

import { breakpoints } from 'styling/breakpoints';

export const Header = () => {
  //
  const { width } = useWindowDimensions();
  const isMobileWidth = width < Number.parseInt(breakpoints.tablet);

  return (
    <AppBar>
      <Container>
        <HeaderWrapper>
          <Logo>My Logo</Logo>
          <UserMenu isMobile={isMobileWidth} />
        </HeaderWrapper>
      </Container>
    </AppBar>
  );
};
