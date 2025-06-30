import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: sans-serif;
  }

  button {
    padding: 8px 12px;
    cursor: pointer;
  }
`;

export default GlobalStyle;
