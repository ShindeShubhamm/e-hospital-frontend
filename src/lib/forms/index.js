import React, { Fragment, useEffect, useState } from 'react';

import { Button, Grid } from '@material-ui/core';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';

import { clearFormData, setFormData } from '../redux/actions/formActions';
import ComponentMapper from './ComponentMapper';
import { login, signup } from './schemas';
import { validateRequired } from './validations';

const handleForm = (schemaName) => {
  switch (schemaName) {
    case 'LOGIN':
      return { schema: login(), state: 'loginState' };
    case 'SIGNUP':
      return { schema: signup(), state: 'signupState' };
    default:
      return { schema: { fields: [] }, state: '' };
  }
};

const FormHandler = (props) => {
  const [errors, setErrors] = useState([]);
  const [check, setCheck] = useState(false);
  const formDetails = handleForm(props.form);
  const { state } = formDetails;
  const schema = props.schema || formDetails.schema;
  const formState = props[state];

  useEffect(() => {
    if (!isEmpty(formState) && !props.noInitialChecks) {
      setCheck(true);
    }
    setErrors(new Array(schema.fields.length).fill(false));
    return () => {
      props.onClear(props.form);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCheck(true);
    try {
      const res = await validateRequired(schema.fields, formState);
      if (!errors.includes(true) && res) {
        props.onSubmit(formState);
      }
    } catch (error) {
      // To be put in db.
    } finally {
      setCheck(false);
    }
  };

  const handleErrors = (value, index) => {
    errors.splice(index, 1, value);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className={`ff-filetemplate ${props.className}`}>
        <Grid container spacing={2}>
          {schema.fields.map((field, index) => (
            <Fragment key={index}>
              <ComponentMapper
                {...field}
                index={index}
                setFormData={props.onFormData}
                formName={props.form}
                value={formState[field.name] ?? ''}
                handleErrors={handleErrors}
                check={check}
              />
            </Fragment>
          ))}
        </Grid>
        <div className={`ff-submit-btn-section ${props.buttonClassName}`}>
          {props.secondaryButton}
          {props.submitButton ? (
            props.submitButton
          ) : (
            <Button className="ff-btn" type="submit" color="primary" variant="contained">
              {props.submitButtonLabel}
            </Button>
          )}
        </div>
      </form>
    </Fragment>
  );
};

FormHandler.defaultProps = {
  secondaryButton: '',
  submitButtonLabel: 'Submit',
  className: '',
  buttonClassName: '',
  noInitialChecks: false,
};

const mapStateToProps = (state) => {
  return {
    signupState: state.signupForm,
    loginState: state.loginForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFormData: (formName, data) => dispatch(setFormData(formName, data)),
    onClear: (formName) => dispatch(clearFormData(formName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormHandler);
