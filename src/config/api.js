const PORT = 5000;
const env = process.env.NODE_ENV;

export const getAPI = () => {
  switch (env) {
    case 'production':
      return 'https://localhost:4000'; // To be changed, once deployed
    case 'development':
      return `http://localhost:${PORT}`;
    case 'test':
      return `http://localhost:${PORT}`;
    default:
      return `http://localhost:${PORT}`;
  }
};
