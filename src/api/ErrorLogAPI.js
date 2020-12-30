import axios from 'axios';

const api = process.env.REACT_APP_API_ENDPOINT;

const ErrorAPI = {
  log: (data) => {
    return axios.post(`${api}/error`, data);
  },
};

export default ErrorAPI;
