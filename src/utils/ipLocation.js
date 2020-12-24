import axios from 'axios';

const API_KEY = process.env.REACT_APP_ASTRO_IP_API_KEY;

// export const getDataByIP = async () => {
//   const ipRes = await axios.get('https://jsonip.com');
//   if (ipRes.status === 200) {
//     const locationUrl = `https://api.astroip.co/${ipRes.data.ip}?api_key=${API_KEY}`;
//     const locationRes = await axios.get(locationUrl);
//     console.log(locationRes.data);
//   }
//   return {};
// };
export const getDataByIP = async () => {
  const locationUrl = `https://api.astroip.co/?api_key=${API_KEY}`;
  const res = await axios.get(locationUrl);
  return res.data;
};
