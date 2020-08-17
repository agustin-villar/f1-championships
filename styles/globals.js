import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.mediumgray};
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.body};
    line-height: 1.5;
  }

  html {
    scroll-behavior: smooth;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    background-color: ${({ theme }) => theme.colors.lightgray};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5 {
    font-family: ${({ theme }) => theme.fonts.display};
  }

  p {
    margin: 0;
  }
`;

export default GlobalStyle;
