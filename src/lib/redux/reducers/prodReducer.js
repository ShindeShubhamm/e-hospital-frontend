import {
  CREATE_PROVIDER_ACC,
  LOAD_ALL_DOCTORS,
  LOAD_PROVIDER_DATA,
  START_LOAD_ALL_DOCTORS,
} from '../actions/types';

const initialState = {
  data: null,
  allDoctors: [],
  loadingDoctors: false,
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

    case START_LOAD_ALL_DOCTORS:
      return {
        ...state,
        loadingDoctors: true,
      };

    case LOAD_ALL_DOCTORS:
      return {
        ...state,
        loadingDoctors: false,
        allDoctors: payload,
      };

    default:
      return { ...state };
  }
};

export default prodReducer;
