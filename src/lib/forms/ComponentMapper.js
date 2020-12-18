import React, { useEffect, useState } from 'react';

import TextField from './elements/TextField';
import { isValid } from './validations';

const ComponentMapper = (props) => {
  const [meta, setMeta] = useState({
    error: '',
    touched: false,
  });

  const handleValidation = async (value, touched) => {
    const validation = await isValid(props, value);
    const error = !!validation.error;
    props.handleErrors(error, props.index);
    setMeta({
      ...meta,
      error: validation.error,
      touched: touched ?? meta.touched,
    });
  };

  useEffect(() => {
    if (props.check) {
      handleValidation(props.value, true);
    }
  }, [props.check]);

  // If event is received
  const onChange = (event) => {
    props.setFormData(props.formName, {
      [event.target.name]: event.target.value,
    });
    handleValidation(event.target.value);
  };

  // If directly data is received
  const onData = (value) => {
    props.setFormData(props.formName, {
      [props.name]: value,
    });
    handleValidation(value);
  };

  const onBlur = (e) => {
    handleValidation(props.value, true);
  };

  const eventElementProps = {
    ...props,
    onChange,
    onBlur,
    meta,
  };

  const dataElementProps = {
    ...props,
    onChange: onData,
    onBlur,
    meta,
  };

  const components = {
    textfield: <TextField {...eventElementProps} />,
  };

  return (
    components[props.component]
  );
};

export default ComponentMapper;
