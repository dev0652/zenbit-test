import { Helmet } from 'react-helmet-async';
import { AuthDataForm, AuthBody } from 'components';

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

      <AuthBody>
        <AuthDataForm formType="register" />
      </AuthBody>
    </>
  );
};

export default RegisterPage;
