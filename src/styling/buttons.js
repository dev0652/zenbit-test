import { styled } from 'styled-components';

export const BaseButton = styled.button`
  font-weight: 700;
  line-height: 137.5%;
  text-align: center;

  /* min-width: 90px; */
  padding: 11px 0;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.regular};

  background-color: transparent;

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.accent};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.accentDark};
  }
`;

export const AccentedButton = styled(BaseButton)`
  color: white;
  background-color: ${({ theme }) => theme.colors.accent};

  &:hover,
  &:focus-visible {
    --color: ${({ theme }) => theme.colors.accentDark};

    border-color: var(--color);
    background-color: var(--color);
  }

  &:active {
    --color: ${({ theme }) => theme.colors.accentDarker};

    border-color: var(--color);
    background-color: var(--color);
  }
`;
