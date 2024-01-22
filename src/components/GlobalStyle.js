import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const theme = {
  colors: {
    primaryWhite: '#FFF',
    primaryBlack: '#121417',
    lightBlue: '#3470FF',
    darkBlue: '#0B44CD',
  },
};

export const GlobalStyle = createGlobalStyle`

:root {
  --animation-time: 250ms;
  --animation-cubic: cubic-bezier(0.4, 0, 0.2, 1);
}

body {
  position: relative;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme: { colors } }) => colors.primaryBlack};
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a{
  text-decoration: none;
  color: inherit;
}
`;