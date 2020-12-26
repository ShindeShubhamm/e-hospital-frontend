import ls from 'local-storage';

import { OVERLAY_SET, OVERLAY_UNSET } from '../actions/types';

const initialState = !!ls.get('token');

const overlayReducer = (state = initialState, action) => {
  switch (action.type) {
    case OVERLAY_SET:
      return true;
    case OVERLAY_UNSET:
      return false;
    default:
      return state;
  }
};

export default overlayReducer;
