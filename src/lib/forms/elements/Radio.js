import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  Radio as MuiRadio,
  RadioGroup,
} from '@material-ui/core';

const Radio = (props) => {
  const { meta } = props;
  return (
    <Grid
      item
      xs={props.grid.xs}
      sm={props.grid.sm}
      md={props.grid.md}
      lg={props.grid.lg}
      xl={props.grid.xl}
    >
      <div className={`ff-component-container ${props.className}`} style={{ ...props.style }}>
        <FormControl component="fieldset" className="ff-textfield">
          <label htmlFor={props.name} className="ff-component-label">{props.label}</label>
          <RadioGroup
            name={props.name}
            onChange={props.onChange}
            value={props.value}
            onBlur={props.onBlur}
          >
            {props.options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option.value}
                control={
                  <MuiRadio id={`${props.name}-${index}`} color="primary" size={props.size} />
                }
                label={option.label}
                labelPlacement={props.labelPlacement}
              />
            ))}
          </RadioGroup>
          <FormHelperText id={`${props.name}-helper-text`}>{props.helperText}</FormHelperText>
          {meta.error && meta.touched && (
            <div>
              <span className="ff-error">{meta.error}</span>
            </div>
          )}
        </FormControl>
      </div>
    </Grid>
  );
};

Radio.defaultProps = {
  className: '',
  style: {},
  helperText: '',
  size: 'small',
  labelPlacement: 'end',
  options: [],
  grid: {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
  },
};

export default Radio;
