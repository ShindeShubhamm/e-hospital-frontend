import React, { Fragment, useEffect, useState } from 'react';

import { Button, Grid } from '@material-ui/core';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';

import { clearFormData, setFormData } from '../redux/actions/formActions';
import ComponentMapper from './ComponentMapper';
import getSchema from './schemas';
import { validateRequired } from './validations';

const FormHandler = (props) => {
  const [errors, setErrors] = useState([]);
  const [check, setCheck] = useState(false);
  const schema = props.schema || getSchema(props.form);
  const { formState } = props;

  useEffect(() => {
    if (!isEmpty(formState) && !props.noInitialChecks) {
      setCheck(true);
    }
    setErrors(new Array(schema.fields.length).fill(false));
    return () => {
      props.onClear();
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
    formState: state.form,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFormData: (data) => dispatch(setFormData(data)),
    onClear: () => dispatch(clearFormData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormHandler);
