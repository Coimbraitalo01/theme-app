import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import GlobalStyle from './styles/GlobalStyle';
import { lightTheme, darkTheme } from './styles/theme';

const Content = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div>
        <h1>Meu Site</h1>
        <button onClick={toggleTheme}>
          Alternar para {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
        <p>Bem-vindo ao nosso site!</p>
      </div>
    </StyledThemeProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

export default App;
