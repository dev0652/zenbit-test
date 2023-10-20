import { Helmet } from 'react-helmet-async';

import AuthDataForm from 'components/Forms/AuthDataForm';
import AuthBody from 'components/AuthBody/AuthBody';
import { FlexCentered } from 'styling/positioning';

export default function Register() {
  return (
    <>
      <Helmet>
        <title>Register</title>
        <meta
          name="description"
          content="Register to see your personalized items"
        />
      </Helmet>

      <FlexCentered>
        <AuthBody>
          <AuthDataForm formType="register" />
        </AuthBody>
      </FlexCentered>
    </>
  );
}
