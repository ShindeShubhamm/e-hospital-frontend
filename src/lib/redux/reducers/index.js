import { combineReducers } from 'redux';

import authReducer from './authReducer';
import backdropReducer from './backdropReducer';
import createFormReducer from './formReducer';
import overlayReducer from './overlayReducer';
import snackbarReducer from './snackbarReducer';

export default combineReducers({
  auth: authReducer,
  backdrop: backdropReducer,
  snackbar: snackbarReducer,
  overlay: overlayReducer,
  signupForm: createFormReducer('SIGNUP'),
  loginForm: createFormReducer('LOGIN'),
});
