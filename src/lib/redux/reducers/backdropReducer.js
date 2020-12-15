import {
  BDROP_SET,
  BDROP_UNSET,
} from '../actions/types';

const initialState = false;

const backdropReducer = (state = initialState, action) => {
  switch (action.type) {
    case BDROP_SET:
      return true;
    case BDROP_UNSET:
      return false;
    default:
      return state;
  }
};

export default backdropReducer;
