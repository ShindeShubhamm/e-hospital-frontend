import axios from 'axios';

const api = process.env.REACT_APP_API_ENDPOINT;

const AuthAPI = {
  login: (data) => {
    return axios.post(`${api}/auth`, data);
  },
};

export default AuthAPI;
