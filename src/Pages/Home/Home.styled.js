import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  left: 0;
  top: 0;
  z-index: -100;
  min-width: 100vw;
  min-height: 100vh;
  text-align: center;
  background-size: cover;
  background-position: center;
`;

export const TextContainer = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const Title = styled.h1`
  font-size: 40px;
  letter-spacing: 0.07em;
`;

export const ButtonLink = styled(NavLink)`
  display: flex;
  width: fit-content;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${({ theme: { colors } }) => colors.lightBlue};

  color: ${({ theme: { colors } }) => colors.primaryWhite};
  font-weight: 600;
  line-height: 1.43;

  transition: background-color var(--animation-time) var(--animation-cubic);

  &:hover,
  &:focus {
    background: ${({ theme: { colors } }) => colors.darkBlue};
  }
`;