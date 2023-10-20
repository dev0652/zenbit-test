import { BannerSide, FormSide, Page } from './AuthBody.styled';
import { useOutletContext } from 'react-router-dom';

export default function AuthBody({ children }) {
  const [headerHeight] = useOutletContext();

  return (
    <Page $headerHeight={headerHeight}>
      <BannerSide />
      <FormSide>{children}</FormSide>
    </Page>
  );
}
