import axios from 'axios';

const API_KEY = process.env.REACT_APP_ASTRO_IP_API_KEY;
const ipUrl = 'https://jsonip.com';

const getDataByIP = async () => {
  try {
    const ipRes = await axios.get(ipUrl, {
      transformRequest: (data, headers) => {
        delete headers.common['auth-token'];
      },
    });
    if (ipRes.status === 200 && ipRes.data.ip) {
      const url = `https://api.astroip.co/${ipRes.data.ip}?api_key=${API_KEY}`;
      const res = await axios.get(url);
      return res.data;
    }
  } catch (error) {
    return {};
  }
};

export default getDataByIP;
