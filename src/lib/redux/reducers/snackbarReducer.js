import { ALERT_ERROR, ALERT_SET, ALERT_UNSET } from '../actions/types';

const initialState = {
  open: false,
  message: '',
  severity: '',
};

const snackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALERT_SET:
      return {
        ...state,
        ...action.payload,
      };
    case ALERT_UNSET:
      return {
        open: false,
        message: '',
        severity: '',
      };
    case ALERT_ERROR:
      return {
        open: true,
        message: 'Something went wrong. Try again later.',
        severity: 'error',
      };
    default:
      return state;
  }
};

export default snackbarReducer;
