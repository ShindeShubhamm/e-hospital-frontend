import { CREATE_PROVIDER_ACC } from '../actions/types';

const initialState = {
  data: null,
};

const providerReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PROVIDER_ACC:
      return {
        ...state,
        data: payload,
      };

    default:
      return { ...state };
  }
};

export default providerReducer;
