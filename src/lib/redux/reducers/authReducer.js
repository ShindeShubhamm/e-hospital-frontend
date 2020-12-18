import {
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_LOGOUT,
  AUTH_SUCCESS,
} from '../actions/types';

const initialState = {
  userInfo: null,
  isAuthenticated: false,
  token: null,
  error: null,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        error: null,
        loading: false,
      };
    case AUTH_ERROR:
      return {
        ...state,
        ...action.payload,
        userInfo: null,
        isAuthenticated: false,
        token: null,
        loading: false,
      };
    case AUTH_LOGOUT:
      return {
        userInfo: null,
        isAuthenticated: false,
        token: null,
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;