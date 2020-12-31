import { FormControl, FormHelperText, Grid, TextField as MuiTextField } from '@material-ui/core';

const TextField = (props) => {
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
        <FormControl className="ff-textfield">
          <label htmlFor={props.name} className="ff-component-label">
            {props.label}
          </label>
          <MuiTextField
            value={props.value || ''}
            onChange={props.onChange}
            onBlur={props.onBlur}
            name={props.name}
            id={props.name}
            variant="outlined"
            type={props.type || 'text'}
            error={!!meta.error && meta.touched}
            helperText={!!meta.error && meta.touched ? meta.error : ''}
            placeholder={props.placeholder}
            size={props.textFieldSize}
            fullWidth
            InputProps={{
              readOnly: props.readOnly,
            }}
          />
          <FormHelperText id={`${props.name}-helper-text`}>{props.helperText}</FormHelperText>
        </FormControl>
      </div>
    </Grid>
  );
};

TextField.defaultProps = {
  className: '',
  style: {},
  readOnly: false,
  textFieldSize: 'small',
  inputAdornment: '',
  inputAdornmentPostion: 'start',
  helperText: '',
  placeholder: '',
  grid: {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
  },
};

export default TextField;
