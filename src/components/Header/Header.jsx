import useWindowDimensions from 'hooks/useWindowDimensions';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { AppBar, HeaderWrapper } from './Header.styled';
import { UserMenu } from 'components';

const Header = () => {
  //
  const { width } = useWindowDimensions();
  const isMobileWidth = width < 600;

  return (
    <AppBar>
      <Container>
        <HeaderWrapper>
          <div style={{ color: 'yellowgreen' }}>Logo{width}</div>
          <UserMenu isMobile={isMobileWidth} />
        </HeaderWrapper>
      </Container>
    </AppBar>
  );
};

export default Header;
