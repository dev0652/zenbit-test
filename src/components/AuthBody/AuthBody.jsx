import { BannerSide, FormSide, Page } from './AuthBody.styled';

export default function AuthBody({ children }) {
  return (
    <Page>
      <BannerSide />
      <FormSide>{children}</FormSide>
    </Page>
  );
}
