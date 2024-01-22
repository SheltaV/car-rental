import { Oval } from 'react-loader-spinner';
import { theme } from './GlobalStyle';

export const Loader = () => {
  return (
    <Oval
      visible={true}
      height="80"
      width="80"
      color={theme.colors.darkBlue}
      secondaryColor={theme.colors.lightBlue}
      ariaLabel="revolving-dot-loading"
      wrapperStyle={{
        position: 'fixed',
        display: 'flex',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(18, 20, 23, 0.80)',
        zIndex: '10000',
      }}
      wrapperClass=""
    />
  );
};