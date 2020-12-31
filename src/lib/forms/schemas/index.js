import * as doctor from './doctor';
import * as login from './login';
import * as signup from './signup';

const getSchema = (name) => {
  switch (name) {
    case 'LOGIN':
      return login.login();
    case 'SIGNUP':
      return signup.signup();
    case 'DOCTOR_BASIC_INFO':
      return doctor.doctorBasicInfo();
    default:
      return { fields: [] };
  }
};

export default getSchema;
