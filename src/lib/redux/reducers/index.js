import { combineReducers } from 'redux';

import authReducer from './authReducer';
import backdropReducer from './backdropReducer';
import snackbarReducer from './snackbarReducer';

export default combineReducers({
  auth: authReducer,
  backdrop: backdropReducer,
  snackbar: snackbarReducer,
});
