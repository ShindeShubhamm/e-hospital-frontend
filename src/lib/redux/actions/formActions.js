import {
  FORM_RESET,
  FORM_SET_DATA,
} from './types';

export const setFormData = (formName, data) => (dispatch) => {
  dispatch({
    type: FORM_SET_DATA,
    payload: data,
    name: formName,
  });
};

export const clearFormData = (formName) => (dispatch) => {
  dispatch({
    type: FORM_RESET,
    name: formName,
  });
};
