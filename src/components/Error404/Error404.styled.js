import styled from 'styled-components';
import { StyledLink } from 'styling/links';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;

  background-color: whitesmoke;
`;

export const Image = styled.img`
  max-height: 40vh;
  max-width: 90vw;
`;

export const ErrorTextWrapper = styled.div`
  color: ${({ theme }) => theme.colors.blackish};
`;

export const ErrorNo = styled.p`
  font-weight: bold;
  font-size: 3rem;
`;

export const ErrorText = styled.p`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

export const HomePageLink = styled(StyledLink)`
  font-size: 1.6rem;
`;
