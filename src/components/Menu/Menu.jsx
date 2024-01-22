import { IconLink, List, ListItem } from './Menu.styled';
import { ReactComponent as FavoritesIcon } from '../../icons/normal.svg';
import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <List>
      <ListItem>
        <NavLink to="/catalog">Catalog</NavLink>
      </ListItem>
      <ListItem>
        <IconLink to="/favorites">
          <FavoritesIcon />
        </IconLink>
      </ListItem>
    </List>
  );
};