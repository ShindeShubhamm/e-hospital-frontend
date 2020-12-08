const DEV_PORT = 4000;
const env = process.env.NODE_ENV;

export const getAPI = () => {
  switch (env) {
    case 'production':
      return 'https://localhost:4000'; // To be changed, once deployed
    case 'development':
      return `http://localhost:${DEV_PORT}`;
    case 'test':
      return `http://localhost:${DEV_PORT}`;
    default:
      return `http://localhost:${DEV_PORT}`;
  }
};
