import { FORM_RESET, FORM_SET_DATA } from '../actions/types';

const formReducer = (state = {}, action) => {
  const { payload, type } = action;

  switch (type) {
    case FORM_SET_DATA:
      return {
        ...state,
        ...payload,
      };
    case FORM_RESET:
      return {};
    default:
      return state;
  }
};

export default formReducer;
