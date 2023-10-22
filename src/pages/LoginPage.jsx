import { Helmet } from 'react-helmet-async';
import { AuthDataForm, AuthBody } from 'components';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta
          name="description"
          content="Log in to view your personalized items"
        />
      </Helmet>

      <AuthBody>
        <AuthDataForm formType="login" />
      </AuthBody>
    </>
  );
};

export default LoginPage;
