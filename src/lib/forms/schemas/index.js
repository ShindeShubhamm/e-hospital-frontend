import * as auth from './auth';
import * as doctor from './doctor';

const getSchema = (name) => {
  switch (name) {
    case 'LOGIN':
      return auth.login();
    case 'SIGNUP':
      return auth.signup();
    case 'DOCTOR_BASIC_INFO':
      return doctor.basicInfo();
    case 'DOCTOR_REGISTRATION_DETAILS':
      return doctor.registrationDetails();
    case 'DOCTOR_OTHER_DETAILS':
      return doctor.otherDetails();
    case 'DOCTOR_EDU_DETAILS':
      return doctor.qualificationDetails();
    default:
      return { fields: [] };
  }
};

export default getSchema;
