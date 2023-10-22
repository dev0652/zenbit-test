import { Helmet } from 'react-helmet-async';
import { AuthDataForm, AuthBody } from 'components';
import { FlexCentered } from 'styling/positioning';

const RegisterPage = () => {
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
};

export default RegisterPage;
