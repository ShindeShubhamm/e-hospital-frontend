import axios from 'axios';

const url = 'http://ip-api.com/json/?fields=status,city';

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
    });
    return res.data;
  } catch (error) {
    return {};
  }
};

export default getDataByIP;
