import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from "@material-ui/core"
import { AppTheme } from './theme';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={AppTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Web vitals for performance improvement. For later use.
reportWebVitals();
