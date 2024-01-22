import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPage, getByMake } from '../../redux/operations';
import { CardItem } from 'components/CardItem/CardItem';
import { selectAdverts } from '../../redux/selectors';
import { Btn } from './Catalog.styled';
import { Grid } from 'components/Global/Global.styled';
import { useSearchParams } from 'react-router-dom';

export const Catalog = () => {
  const LIMIT = 12;
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  const [page, setPage] = useState(1);
  const [isLastPage, setLastPage] = useState(false);

  const [searchParams] = useSearchParams();

  const controllerRef = useRef();

  useEffect(() => {
    if (searchParams.size === 0) {
      dispatch(fetchPage({ page, limit: LIMIT }));
      return;
    }

    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();
    const filters = {};

    searchParams.forEach((value, key) => (filters[key] = value));

    dispatch(getByMake(filters));
    setLastPage(true);
    return () => {
      controllerRef.current.abort();
    };
  }, [searchParams, dispatch, page]);

  useEffect(() => {
    if (adverts.length % LIMIT !== 0) {
      setLastPage(true);
    }
  }, [adverts]);

  return (
    <>
      <Grid>
        {adverts.map(item => (
          <CardItem key={item.id} item={item} />
        ))}
      </Grid>
      {!isLastPage && (
        <Btn
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Load more
        </Btn>
      )}
    </>
  );
};