import axios from 'axios';

const api = process.env.REACT_APP_API_ENDPOINT;

const FileAPI = {
  upload: (data) => {
    return axios.post(`${api}/file`, data, {
      'Content-Type': 'multipart/form-data',
    });
  },
  delete: (filename) => {
    return axios.delete(`${api}/file/${filename}`);
  },
};

export default FileAPI;
