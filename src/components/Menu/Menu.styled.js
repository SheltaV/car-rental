import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ListItem = styled.li`
  padding: 8px 8px;
  border-radius: 12px;
  background: ${({ theme: { colors } }) => colors.lightBlue};

  color: ${({ theme: { colors } }) => colors.primaryWhite};
  font-weight: 600;
  line-height: 1.43;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  cursor: pointer;

  transition: background-color var(--animation-time) var(--animation-cubic);

  &:hover,
  &:focus {
    background: ${({ theme: { colors } }) => colors.darkBlue};
  }
`;

export const IconLink = styled(NavLink)`
  display: flex;
`;