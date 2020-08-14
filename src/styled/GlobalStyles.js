import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
  background-color: #ddd;
}
.App {
  min-height: 100vh;
}
`;