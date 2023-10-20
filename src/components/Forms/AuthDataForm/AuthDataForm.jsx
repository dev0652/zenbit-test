import { useDispatch } from 'react-redux';
import { login, register } from 'redux/auth/operations';

import {
  FieldsWrapper,
  FormWrapper,
  SubmitButton,
  AuthFormContainer,
  ButtonGroup,
  Title,
  ForgotPassword,
} from './AuthDataForm.styled';
import { toast } from 'react-hot-toast';
import SwitchForms from '../SwitchForms/SwitchForms';
import { TextField } from '../TextField';

// ################################################

export default function AuthDataForm({ formType }) {
  const dispatch = useDispatch();

  const isSignUp = formType === 'register';
  let title, buttonText, toastMessage, operation;

  if (formType === 'login') {
    title = 'Login';
    buttonText = 'Sign in';
    toastMessage = 'Login successful';
    operation = login;
  }

  if (isSignUp) {
    title = 'Create an account';
    buttonText = 'Sign up';
    toastMessage = 'Registration successful';
    operation = register;
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
      .then(() => toast.success(toastMessage))
      .catch(() => toast.error('Error authenticating. Please try again later'));

    form.reset();
  };

  return (
    <AuthFormContainer>
      <section>
        <Title>{title}</Title>
        <FormWrapper onSubmit={handleSubmit}>
          <FieldsWrapper>
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

          <ForgotPassword type="button">Forgot password?</ForgotPassword>

          <ButtonGroup>
            <SubmitButton type="submit">{buttonText}</SubmitButton>

            <SwitchForms condition={isSignUp} />
          </ButtonGroup>
        </FormWrapper>
      </section>
    </AuthFormContainer>
  );
}
