import {
  BOOK_APPOINTMENT,
  FETCH_DOCTOR_APPOINTMENTS,
  FETCH_USER_APPOINTMENTS,
  UPDATE_APPOINTMENT,
} from '../actions/types';

const initialState = {
  myAppointments: [],
  loading: true,
};

export const appointReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BOOK_APPOINTMENT:
      return {
        ...state,
        myAppointments: [...state.myAppointments, payload],
      };
    case UPDATE_APPOINTMENT:
      return {
        ...state,
        myAppointments: payload,
      };

    case FETCH_DOCTOR_APPOINTMENTS:
      return {
        ...state,
        myAppointments: payload,
        loading: false,
      };

    case FETCH_USER_APPOINTMENTS:
      return {
        ...state,
        myAppointments: payload,
        loading: false,
      };

    default:
      return { ...state };
  }
};

export default appointReducer;
