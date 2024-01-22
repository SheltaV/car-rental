import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Wrapper } from './Global/Global.styled';
import { Loader } from './Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/selectors';

export const SharedLayout = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <Header />
      <Suspense>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Suspense>
      {isLoading && <Loader />}
    </>
  );
};