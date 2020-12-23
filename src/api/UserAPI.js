import axios from 'axios';

const api = process.env.REACT_APP_API_ENDPOINT;

const UserAPI = {
  get: (id) => {
    return axios.get(`${api}/user/${id}`);
  },
  create: (data) => {
    return axios.post(`${api}/user`, data);
  },
  update: (id, data) => {
    return axios.put(`${api}/user/${id}`, data);
  },
};

export default UserAPI;
