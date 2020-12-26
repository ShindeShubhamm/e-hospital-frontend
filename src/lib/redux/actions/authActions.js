import ls from 'local-storage';

import AuthAPI from '../../../api/AuthAPI';
import UserAPI from '../../../api/UserAPI';
import setAxiosToken from '../../../utils/setAxiosToken';
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
    const { msg, user, token } = res.data;
    dispatch({
      type: AUTH_SUCCESS,
      payload: {
        userInfo: user,
        token,
      },
    });
    dispatch({
      type: BDROP_UNSET,
    });
    dispatch({
      type: ALERT_SET,
      payload: { open: true, message: msg, severity: 'success' },
    });
  } catch (error) {
    dispatch({
      type: BDROP_UNSET,
    });

    const { data } = error.response;

    if (data?.msg === 'Invalid credentials') {
      dispatch({
        type: ALERT_SET,
        payload: { open: true, message: data.msg, severity: 'error' },
      });
    } else {
      dispatch({
        type: AUTH_ERROR,
        payload: { error: error.response },
      });
      dispatch({
        type: ALERT_ERROR,
      });
    }
  }
};

export const authLogout = () => (dispatch) => {
  dispatch({
    type: AUTH_LOGOUT,
  });
  location.reload();
};

export const loadUser = () => async (dispatch) => {
  const token = ls.get('token');
  setAxiosToken(token);

  try {
    const res = await AuthAPI.getUser();
    const { user } = res.data;
    dispatch({
      type: AUTH_SUCCESS,
      payload: {
        userInfo: user,
        token,
      },
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: { error: error.response },
    });
  }
};

export const authSignup = (data) => async (dispatch) => {
  dispatch({
    type: BDROP_SET,
  });
  try {
    const res = await UserAPI.create(data);
    const { msg, user, token } = res.data;
    dispatch({
      type: AUTH_SUCCESS,
      payload: {
        userInfo: user,
        token,
      },
    });
    dispatch({
      type: BDROP_UNSET,
    });
    dispatch({
      type: ALERT_SET,
      payload: { open: true, message: msg, severity: 'success' },
    });
  } catch (error) {
    dispatch({
      type: BDROP_UNSET,
    });

    const { data } = error.response;

    if (data?.msg === 'Email already taken' || data?.msg === 'Mobile Number already taken') {
      dispatch({
        type: ALERT_SET,
        payload: { open: true, message: data.msg, severity: 'warning' },
      });
    } else {
      dispatch({
        type: ALERT_ERROR,
      });
      dispatch({
        type: AUTH_ERROR,
        payload: { error: error.response },
      });
    }
  }
};
