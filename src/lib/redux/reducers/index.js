import { combineReducers } from 'redux';

import authReducer from './authReducer';
import backdropReducer from './backdropReducer';
import formReducer from './formReducer';
import overlayReducer from './overlayReducer';
import snackbarReducer from './snackbarReducer';

export default combineReducers({
  auth: authReducer,
  backdrop: backdropReducer,
  snackbar: snackbarReducer,
  overlay: overlayReducer,
  form: formReducer,
});
