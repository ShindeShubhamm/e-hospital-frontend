import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './lib/redux/store';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { AppTheme } from './theme';

window.addEventListener('storage', (event) => {
  if (event.key === 'token') {
    location.reload();
  }
});

const AppIndex = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  );
};

ReactDOM.render(<AppIndex />, document.getElementById('root'));

// Web vitals for performance improvement. For later use.
reportWebVitals();
serviceWorker.register();
