import { combineReducers } from 'redux';

import appointReducer from './appointReducer';
import authReducer from './authReducer';
import backdropReducer from './backdropReducer';
import dashboardReducer from './dashboardReducer';
import formReducer from './formReducer';
import overlayReducer from './overlayReducer';
import prodReducer from './prodReducer';
import snackbarReducer from './snackbarReducer';

export default combineReducers({
  auth: authReducer,
  backdrop: backdropReducer,
  snackbar: snackbarReducer,
  overlay: overlayReducer,
  form: formReducer,
  dashboard: dashboardReducer,
  prod: prodReducer,
  appoint: appointReducer,
});
