import { DASH_SELECTED_MENU } from './types';

export const selectMenuItem = (menu) => (dispatch) => {
  dispatch({
    type: DASH_SELECTED_MENU,
    payload: menu,
  });
};
