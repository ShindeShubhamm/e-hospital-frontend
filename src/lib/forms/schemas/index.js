import * as login from './login';
import * as signup from './signup';

const getSchema = (name) => {
  switch (name) {
    case 'LOGIN':
      return login.login();
    case 'SIGNUP':
      return signup.signup();
    default:
      return { fields: [] };
  }
};

export default getSchema;
