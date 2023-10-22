import { BannerSide, FormSide, Page } from './AuthBody.styled';
import PropTypes from 'prop-types';

export const AuthBody = ({ children }) => {
  return (
    <Page>
      <BannerSide />
      <FormSide>{children}</FormSide>
    </Page>
  );
};

// ****** PropTypes *******************************

AuthBody.propTypes = {
  children: PropTypes.node,
};
