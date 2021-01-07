import axios from 'axios';

const url = 'http://ip-api.com/json/?fields=status,city';

// <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
const getDataByIP = async () => {
  if (process.env.NODE_ENV === 'development') {
    return {
      status: 'success',
      city: 'Only in production',
    };
  }
  try {
    const res = await axios.get(url, {
      transformRequest: (data, headers) => {
        delete headers.common['auth-token'];
      },
      headers: {
        'Upgrade-Insecure-Requests': 1,
      },
    });
    return res.data;
  } catch (error) {
    return {};
  }
};

export default getDataByIP;
