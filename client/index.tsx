import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from './containers/app';
import mainTheme from './sc-themes/main';
import { store } from './store';

import './styles.css';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={mainTheme}>
      <App/>
    </ThemeProvider>
  </Provider>
  , document.getElementById('root'),
);
