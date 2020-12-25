import ls from 'local-storage';

import AuthAPI from '../../../api/AuthAPI';
import UserAPI from '../../../api/UserAPI';
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

export const authLogin = (data) => async (dispatch) => {
  dispatch({
    type: BDROP_SET,
  });
  try {
    const res = await AuthAPI.login(data);
    const { token } = res.data;
    dispatch({
      type: AUTH_SUCCESS,
      payload: {
        userInfo: null, // To be added
        token,
      },
    });
    ls.set('token', token);
    dispatch({
      type: BDROP_UNSET,
    });
    dispatch({
      type: ALERT_SET,
      payload: { open: true, message: 'Login Successful', severity: 'success' },
    });
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
  ls.clear();
  dispatch({
    type: AUTH_LOGOUT,
  });
};

export const authSignup = (data) => async (dispatch) => {
  dispatch({
    type: BDROP_SET,
  });
  try {
    const res = await UserAPI.create(data);
    const { token } = res.data;
    ls.set('token', token);
    dispatch({
      type: AUTH_SUCCESS,
      payload: {
        userInfo: null, // To be added
        token,
      },
    });
    dispatch({
      type: BDROP_UNSET,
    });
    dispatch({
      type: ALERT_SET,
      payload: { open: true, message: 'Account created successfully.', severity: 'success' },
    });
  } catch (error) {
    dispatch({
      type: ALERT_ERROR,
    });
    dispatch({
      type: AUTH_ERROR,
      payload: { error: error.msg },
    });
    dispatch({
      type: BDROP_UNSET,
    });
  }
};
