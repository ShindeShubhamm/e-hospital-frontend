import { ALERT_SET, ALERT_UNSET } from './types';

export const snackClose = () => (dispatch) => {
  dispatch({
    type: ALERT_UNSET,
  });
};

export const snackSet = (data) => (dispatch) => {
  dispatch({
    type: ALERT_SET,
    payload: {
      open: true,
      message: data.message,
      severity: data.severity,
    },
  });
};
