import {
  ButtonLink,
  TextContainer,
  Title,
  Wrapper,
} from './Home.styled';

export const MainPage = () => {
  return (
    <Wrapper>
      <TextContainer>
        <Title>Welcome to car rental service</Title>
      </TextContainer>
      <ButtonLink to="/catalog">Click to see all cars</ButtonLink>
    </Wrapper>
  );
};