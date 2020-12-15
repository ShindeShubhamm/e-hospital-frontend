import {
  ALERT_UNSET,
} from './types';

export const snackClose = () => (dispatch) => {
  dispatch({
    type: ALERT_UNSET,
  });
};
