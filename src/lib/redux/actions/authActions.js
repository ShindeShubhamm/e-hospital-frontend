import ls from 'local-storage';

import AuthAPI from '../../../api/AuthAPI';
import FileAPI from '../../../api/FileAPI';
import UserAPI from '../../../api/UserAPI';
import setAxiosToken from '../../../utils/setAxiosToken';
import { loadProviderData } from './prodActions';
import {
  ALERT_ERROR,
  ALERT_SET,
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_LOGOUT,
  AUTH_SUCCESS,
  BDROP_SET,
  BDROP_UNSET,
  OVERLAY_SET,
  OVERLAY_UNSET,
  PROFILE_PIC_REMOVE,
  PROFILE_PIC_UPLOAD,
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
    setAxiosToken(token);
    if (user.isProvider) {
      dispatch(loadProviderData(user._id));
    }
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

    if (error.response) {
      const { data } = error.response;
      if (data?.msg === 'Invalid credentials') {
        dispatch({
          type: ALERT_SET,
          payload: { open: true, message: data.msg, severity: 'error' },
        });
        dispatch({
          type: AUTH_ERROR,
          payload: { error: error.response },
        });
        return;
      }
    }
    dispatch({
      type: ALERT_ERROR,
    });
  }
};

export const authLogout = () => (dispatch) => {
  dispatch({
    type: OVERLAY_SET,
  });
  dispatch({
    type: AUTH_LOGOUT,
  });
  location.reload();
};

export const loadUser = () => async (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  const token = ls.get('token');
  setAxiosToken(token);

  if (!token) {
    dispatch({
      type: OVERLAY_UNSET,
    });
    dispatch({ type: AUTH_LOGOUT });
    return;
  }

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
    if (user.isProvider) {
      dispatch(loadProviderData(user._id));
    }
    dispatch({
      type: OVERLAY_UNSET,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: { error: error.response },
    });
    dispatch({
      type: OVERLAY_UNSET,
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
    setAxiosToken(token);
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

    if (error.response) {
      const { data } = error.response;
      if (
        data?.msg === 'Email already taken' ||
        data?.msg === 'Mobile Number already taken'
      ) {
        dispatch({
          type: ALERT_SET,
          payload: { open: true, message: data.msg, severity: 'warning' },
        });
        dispatch({
          type: AUTH_ERROR,
          payload: { error: error.response },
        });
        return;
      }
    }
    dispatch({
      type: ALERT_ERROR,
    });
  }
};

export const uploadProfilePic = (data) => async (dispatch) => {
  dispatch({ type: BDROP_SET });
  try {
    const res = await FileAPI.upload(data);
    dispatch({ type: PROFILE_PIC_UPLOAD, payload: res.data.filename });
    dispatch({
      type: ALERT_SET,
      payload: { open: true, message: res.data.msg, severity: 'success' },
    });
    dispatch({ type: BDROP_UNSET });
  } catch (error) {
    dispatch({
      type: ALERT_ERROR,
    });
    dispatch({ type: BDROP_UNSET });
  }
};

export const deleteProfilePic = (filename, userId) => async (dispatch) => {
  dispatch({ type: BDROP_SET });
  try {
    await UserAPI.update(userId, { profilePhoto: '' });
    await FileAPI.delete(filename);
    dispatch({ type: PROFILE_PIC_REMOVE });
    dispatch({ type: BDROP_UNSET });
  } catch (error) {
    dispatch({
      type: ALERT_ERROR,
    });
    dispatch({ type: BDROP_UNSET });
  }
};
