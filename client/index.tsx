import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './routes';
import mainTheme from './sc-themes/main';
import { store } from './store';

import './styles.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <App/>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'),
);
