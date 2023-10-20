import { styled } from 'styled-components';
import { AccentedButton } from 'styling/buttons';

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.blackish};
  font-size: 28px;
  font-weight: 700;
  line-height: 121.429%;

  margin-bottom: 20px;
`;

export const AuthFormContainer = styled.div`
  width: 80%;
  max-width: 350px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-bottom: 10px;
`;

export const ForgotPassword = styled.button`
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  border: none;
  background-color: transparent;
  align-self: flex-end;

  font-family: Lato;
  font-weight: 600;

  margin-bottom: 30px;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }

  &:active {
    color: ${({ theme }) => theme.colors.accentDark};
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SubmitButton = styled(AccentedButton)`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 137.5%;

  border-radius: ${({ theme }) => theme.borderRadius.regular};
`;
