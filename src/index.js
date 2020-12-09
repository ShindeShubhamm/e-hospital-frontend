import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppTheme } from './theme';

ReactDOM.render(
  <ThemeProvider theme={AppTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);

// Web vitals for performance improvement. For later use.
reportWebVitals();
