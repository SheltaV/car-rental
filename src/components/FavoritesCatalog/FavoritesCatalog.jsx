import { useSelector } from 'react-redux';
import { CardItem } from 'components/CardItem/CardItem';
import { selectFavorites } from '../../redux/selectors';
import { Grid } from '../Global/Global.styled';

export const FavoritesCatalog = () => {
  const adverts = useSelector(selectFavorites);

  return (
    <Grid>
      {adverts.map(item => (
        <CardItem key={item.id} item={item} />
      ))}
    </Grid>
  );
};