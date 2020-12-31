import { FORM_RESET, FORM_SET_DATA } from './types';

export const setFormData = (data) => (dispatch) => {
  dispatch({
    type: FORM_SET_DATA,
    payload: data,
  });
};

export const clearFormData = () => (dispatch) => {
  dispatch({
    type: FORM_RESET,
  });
};
