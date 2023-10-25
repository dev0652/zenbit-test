import { useDispatch } from 'react-redux';
import { login, register } from 'redux/auth/operations';
import { toast } from 'react-hot-toast';

import { TextField, SwitchForms } from 'components';

import {
  FieldsWrapper,
  FormWrapper,
  SubmitButton,
  AuthFormContainer,
  ButtonGroup,
  Title,
  ForgotPassword,
} from './AuthDataForm.styled';

import PropTypes from 'prop-types';

// ***************************************************

export const AuthDataForm = ({ formType }) => {
  const dispatch = useDispatch();

  const isSignUp = formType === 'register';
  let title, buttonText, operation;

  if (isSignUp) {
    title = 'Create an account';
    buttonText = 'Sign up';
    operation = register;
  } else {
    title = 'Login';
    buttonText = 'Sign in';
    operation = login;
  }

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const credentials = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    if (isSignUp) credentials.name = form.elements.name.value;

    dispatch(operation(credentials))
      .unwrap()
      .then()
      .catch(msg => toast.error(msg, { duration: 4000 }));

    form.reset();
  };

  return (
    <AuthFormContainer>
      <section>
        <Title>{title}</Title>
        <FormWrapper onSubmit={handleSubmit}>
          <FieldsWrapper $isSignUp={isSignUp}>
            {/* Name */}
            {isSignUp && <TextField name="name" />}

            {/* Email */}
            <TextField type="email" name="email" />

            {/* Password */}
            <TextField
              type="password"
              name="password"
              pattern="(?=.*).{7,}"
              title="Password must be at least 7 characters long"
            />
          </FieldsWrapper>

          {!isSignUp && (
            <ForgotPassword type="button">Forgot password?</ForgotPassword>
          )}

          <ButtonGroup>
            <SubmitButton type="submit">{buttonText}</SubmitButton>

            <SwitchForms condition={isSignUp} />
          </ButtonGroup>
        </FormWrapper>
      </section>
    </AuthFormContainer>
  );
};

// ****** PropTypes *******************************

AuthDataForm.propTypes = {
  formType: PropTypes.string,
};
