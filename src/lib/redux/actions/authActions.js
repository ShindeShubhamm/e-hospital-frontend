import {
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_LOGOUT,
  AUTH_SUCCESS,
} from './types';

const setLoading = () => {
  return {
    type: AUTH_LOADING,
  };
};

export const authLogin = (data) => (dispatch) => {
  dispatch(setLoading());
  try {
    setTimeout(() => {
      dispatch({
        type: AUTH_SUCCESS,
        payload: {
          userInfo: data,
          token: 'bsdfikkj-sdfjuidsf-sdfikdfsk',
        },
      });
    }, 1000);
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.message,
    });
  }
};

export const authLogout = () => (dispatch) => {
  dispatch({
    type: AUTH_LOGOUT,
  });
};
