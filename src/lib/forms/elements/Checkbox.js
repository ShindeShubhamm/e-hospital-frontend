import React, { useEffect, useState } from 'react';

import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  Checkbox as Muicheckbox,
} from '@material-ui/core';

const Checkbox = (props) => {
  const { meta } = props;
  const [checkValue, setCheckValue] = useState(false);

  useEffect(() => {
    if (props.value) {
      setCheckValue(props.value);
    } else {
      setCheckValue(false);
      props.onChange(false);
    }
  }, []);

  const handleChange = () => {
    setCheckValue(!checkValue);
    props.onChange(!checkValue);
  };
  return (
    <Grid
      item
      xs={props.grid.xs}
      sm={props.grid.sm}
      md={props.grid.md}
      lg={props.grid.lg}
      xl={props.grid.xl}
    >
      <div
        className={`ff-component-container ${props.className}`}
        style={{ ...props.style }}
      >
        <FormControl
          className="ff-textfield"
          error={!!meta.error && meta.touched}
        >
          <FormControlLabel
            control={
              <Muicheckbox
                onClick={handleChange}
                value={checkValue}
                name={props.name}
                color="primary"
                size={props.size}
                checked={checkValue}
              />
            }
            label={props.label}
            labelPlacement={props.labelPlacement}
          />
          <FormHelperText id={`${props.name}-helper-text`}>
            {props.helperText}
          </FormHelperText>
          {meta.error && meta.touched && (
            <FormHelperText id={`${props.name}-Error`}>
              {meta.error}
            </FormHelperText>
          )}
        </FormControl>
      </div>
    </Grid>
  );
};

Checkbox.defaultProps = {
  className: '',
  style: {},
  helperText: '',
  labelPlacement: 'end',
  size: 'small',
  grid: {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
  },
};

export default Checkbox;
