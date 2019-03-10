import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';

import App from './routes';
import { store } from './store';
import MAIN_THEME from './themes/main';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: ${({ theme }: any) => theme.mainFont};
    font-size: 13px;
    line-height: 16px;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={MAIN_THEME}>
        <>
          <GlobalStyle />
          <App/>
        </>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'),
);
