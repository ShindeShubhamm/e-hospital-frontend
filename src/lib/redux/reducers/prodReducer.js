import { CREATE_PROVIDER_ACC, LOAD_PROVIDER_DATA } from '../actions/types';

const initialState = {
  data: null,
};

const prodReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PROVIDER_ACC:
      return {
        ...state,
        data: payload,
      };

    case LOAD_PROVIDER_DATA:
      return {
        ...state,
        data: payload,
      };

    default:
      return { ...state };
  }
};

export default prodReducer;
