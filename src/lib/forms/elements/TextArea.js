import {
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  TextField as MuiTextField,
} from '@material-ui/core';

const TextArea = (props) => {
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
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            name={props.name}
            id={props.name}
            variant="outlined"
            error={!!meta.error && meta.touched}
            helperText={!!meta.error && meta.touched ? meta.error : ''}
            size={props.textFieldSize}
            fullWidth
            multiline
            rows={props.rows}
            placeholder={props.placeholder}
            InputProps={{
              readOnly: props.readOnly,
              startAdornment: props.inputAdornment && (
                <InputAdornment position={props.inputAdornmentPostion}>
                  {props.inputAdornment}
                </InputAdornment>
              ),
            }}
          />
          <FormHelperText id={`${props.name}-helper-text`}>{props.helperText}</FormHelperText>
        </FormControl>
      </div>
    </Grid>
  );
};

TextArea.defaultProps = {
  className: '',
  style: {},
  readOnly: false,
  textFieldSize: 'small',
  inputAdornment: '',
  inputAdornmentPostion: 'start',
  helperText: '',
  placeholder: '',
  rows: 3,
  grid: {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
  },
};

export default TextArea;
