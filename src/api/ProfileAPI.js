import axios from 'axios';

const api = process.env.REACT_APP_API_ENDPOINT;

const ProfileAPI = {
  get: (id) => {
    return axios.get(`${api}/user/${id}`);
  },
  create: (data) => {
    axios.post(`${api}/user`, data);
  },
  update: (id, data) => {
    axios.patch(`${api}/user/${id}`, data);
  },
};

export default ProfileAPI;
