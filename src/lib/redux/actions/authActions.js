import {
  ALERT_ERROR,
  ALERT_SET,
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_LOGOUT,
  AUTH_SUCCESS,
  BDROP_SET,
  BDROP_UNSET,
} from './types';

const setLoading = () => {
  return {
    type: AUTH_LOADING,
  };
};

export const authLogin = (data) => (dispatch) => {
  setLoading();
  dispatch({
    type: BDROP_SET,
  });
  try {
    setTimeout(() => {
      dispatch({
        type: AUTH_SUCCESS,
        payload: {
          userInfo: data,
          token: 'bsdfikkj-sdfjuidsf-sdfikdfsk',
        },
      });
      dispatch({
        type: BDROP_UNSET,
      });
      dispatch({
        type: ALERT_SET,
        payload: { open: true, message: 'Login Successful', severity: 'success' },
      });
    }, 1000);
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.message,
    });
    dispatch({
      type: BDROP_UNSET,
    });
    dispatch({
      type: ALERT_ERROR,
    });
  }
};

export const authLogout = () => (dispatch) => {
  dispatch({
    type: AUTH_LOGOUT,
  });
};
