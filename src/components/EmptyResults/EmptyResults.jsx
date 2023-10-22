import { Icon, Message, Wrapper } from './EmptyResults.styled';

export const EmptyResults = () => {
  return (
    <Wrapper>
      <Icon />
      <Message>Sorry, there is nothing to display here</Message>
    </Wrapper>
  );
};
