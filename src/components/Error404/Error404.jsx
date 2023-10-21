import image404 from 'images/404.png';
import {
  ErrorNo,
  ErrorText,
  Image,
  HomePageLink,
  Wrapper,
  ErrorTextWrapper,
} from './Error404.styled';

export default function Error404() {
  return (
    <Wrapper>
      <Image src={image404} alt="Pile of tangled filmstrip" />

      <ErrorTextWrapper>
        <ErrorNo>Error 404</ErrorNo>
        <ErrorText>Sorry, we couldn't find this page</ErrorText>

        <HomePageLink to="/">Go back to the homepage</HomePageLink>
      </ErrorTextWrapper>
    </Wrapper>
  );
}
