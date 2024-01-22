import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: ${({ theme: { colors } }) => colors.darkBlue};;
  color: ${({ theme: { colors } }) => colors.primaryWhite};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 76px;
  padding: 8px 16px;
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.07em;
`;