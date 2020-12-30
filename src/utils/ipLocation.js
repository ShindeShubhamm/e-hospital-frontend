import axios from 'axios';

const API_KEY = process.env.REACT_APP_IP_LOCATION_API_KEY;
const url = `https://api.ipregistry.co?key=${API_KEY}`;

const getDataByIP = async () => {
  try {
    const res = await axios.get(url, {
      transformRequest: (data, headers) => {
        delete headers.common['auth-token'];
      },
    });
    return res.data;
  } catch (error) {
    return {};
  }
};

export default getDataByIP;
