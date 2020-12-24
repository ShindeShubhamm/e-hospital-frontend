import axios from 'axios';

const API_KEY = process.env.REACT_APP_ASTRO_IP_API_KEY;
const ipUrl = 'https://jsonip.com';

export const getDataByIP = async () => {
  try {
    const ipRes = await axios.get(ipUrl);
    if (ipRes.status === 200 && ipRes.data.ip) {
      const url = `https://api.astroip.co/${ipRes.data.ip}?api_key=${API_KEY}`;
      const res = await axios.get(url);
      return res.data;
    }
  } catch (error) {
    return {};
  }
};
