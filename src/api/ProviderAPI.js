import axios from 'axios';

const api = process.env.REACT_APP_API_ENDPOINT;

const ProviderAPI = {
  createProvider: (data) => {
    return axios.post(`${api}/provider/create`, data);
  },
  getProvider: (userId) => {
    return axios.get(`${api}/provider/user/${userId}`);
  },
  updateProvider: (id, data) => {
    return axios.patch(`${api}/provider/${id}`, data);
  },
  getAllProviders: () => {
    return axios.get(`${api}/provider`);
  },
};

export default ProviderAPI;
