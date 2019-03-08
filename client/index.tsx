import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';

import App from './routes';
import mainTheme from './sc-themes/main';
import { store } from './store';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: ${({ theme }: any) => theme.mainFont};
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <>
          <GlobalStyle />
          <App/>
        </>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'),
);
