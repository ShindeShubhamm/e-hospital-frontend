import { DASH_SELECTED_MENU } from '../actions/types';

const initialState = {
  selectedMenu: 0,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DASH_SELECTED_MENU:
      return {
        ...state,
        selectedMenu: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
