/* eslint-disable  */
import _ from 'lodash';

import { getValidationError } from './errors';
import {
  email,
  payloadSize,
  required,
  url,
} from './validation-types';

// Validating single field
export const isValid = async ({ validate: validations, label }, value) => {
  if (!_.isArray(validations)) {
    return { error: '' };
  }
  const isRequired = validations.filter((v) => v.type === 'required');
  if (isRequired.length === 0 && !value) {
    return { error: '' };
  }

  const checkValidation = (v) => {
    switch (v.type) {
      case 'required':
        return required(value);
      case 'email':
        return email(value);
      case 'url':
        return url(value);
      case 'payload-size':
        return payloadSize(value, v);
      default:
        return true;
    }
  };

  for (const v of validations) {
    const check = await checkValidation(v);
    if (check) continue;
    return {
      error: v.message || getValidationError(v, label, value),
    };
  }
  return { error: '' };
};

// Validating all fields
export const validateRequired = async (fields = [], values = {}) => {
  const requiredFields = fields.filter((f) => (!f.validate ? false : f.validate.some((v) => v.type === 'required')));
  // eslint-disable-next-line
  for (let field of requiredFields) {
    const result = await isValid(field, values[field.name]);
    if (result.error) {
      return false;
    }
  }
  return true;
};
