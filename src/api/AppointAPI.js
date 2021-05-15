import axios from 'axios';

const api = process.env.REACT_APP_API_ENDPOINT;

const AppointAPI = {
  book: (data) => {
    return axios.post(`${api}/appointment`, data);
  },
  update: (id, data) => {
    return axios.patch(`${api}/appointment/${id}`, data);
  },
  fetchUserAppointments: (userId) => {
    return axios.get(`${api}/appointment/user/${userId}`);
  },
  fetchDoctorAppointments: (doctorId) => {
    return axios.get(`${api}/appointment/doctor/${doctorId}`);
  },
};

export default AppointAPI;
