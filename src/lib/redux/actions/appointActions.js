import AppointAPI from '../../../api/AppointAPI';
import { snackError, snackSet } from './snackbarActions';
import {
  BDROP_SET,
  BDROP_UNSET,
  BOOK_APPOINTMENT,
  FETCH_DOCTOR_APPOINTMENTS,
  FETCH_USER_APPOINTMENTS,
  UPDATE_APPOINTMENT,
} from './types';

export const bookAppointment = (data) => async (dispatch) => {
  dispatch({ type: BDROP_SET });
  try {
    const res = await AppointAPI.book(data);
    dispatch({ type: BOOK_APPOINTMENT, payload: res.data });
    dispatch({ type: BDROP_UNSET });
    dispatch(
      snackSet({ message: 'Booked successfully!', severity: 'success' }),
    );
  } catch (error) {
    dispatch(snackError());
    dispatch({ type: BDROP_UNSET });
  }
};

export const cancelAppointment = (id, appoints, byDoctor) => async (
  dispatch,
) => {
  dispatch({ type: BDROP_SET });
  try {
    const cancelData = appoints.find((a) => a._id === id);
    cancelData.status = byDoctor || 'cancelled';
    const data = appoints.filter((a) => a._id !== id);
    data.push(cancelData);
    const res = await AppointAPI.update(id, cancelData);
    dispatch({
      type: UPDATE_APPOINTMENT,
      payload: data,
    });
    dispatch({ type: BDROP_UNSET });
    dispatch(snackSet({ message: 'Success!', severity: 'success' }));
  } catch (error) {
    dispatch(snackError());
    dispatch({ type: BDROP_UNSET });
  }
};

export const fetchUserAppointments = (userId) => async (dispatch) => {
  dispatch({ type: BDROP_SET });
  try {
    const res = await AppointAPI.fetchUserAppointments(userId);
    dispatch({
      type: FETCH_USER_APPOINTMENTS,
      payload: res.data,
    });
    dispatch({ type: BDROP_UNSET });
  } catch (error) {
    dispatch(snackError());
    dispatch({ type: BDROP_UNSET });
  }
};

export const fetchDoctorAppointments = (doctorId) => async (dispatch) => {
  dispatch({ type: BDROP_SET });
  try {
    const res = await AppointAPI.fetchDoctorAppointments(doctorId);
    dispatch({
      type: FETCH_DOCTOR_APPOINTMENTS,
      payload: res.data,
    });
    dispatch({ type: BDROP_UNSET });
  } catch (error) {
    dispatch(snackError());
    dispatch({ type: BDROP_UNSET });
  }
};
