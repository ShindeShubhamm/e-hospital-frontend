import {
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Select as MuiSelect,
} from '@material-ui/core';

const Select = (props) => {
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
      <div
        className={`ff-component-container ${props.className}`}
        style={{ ...props.style }}
      >
        <FormControl className="ff-textfield">
          <label htmlFor={props.name} className="ff-component-label">
            {props.label}
          </label>
          <MuiSelect
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            name={props.name}
            displayEmpty
            id={props.name}
            variant="outlined"
            error={!!meta.error && meta.touched}
            fullWidth
          >
            <MenuItem value="" disabled>
              {props.placeholder}
            </MenuItem>
            {props.options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                <span className="ff-select-item">
                  {option.icon &&
                    (typeof option.icon === 'string' ? (
                      <img
                        src={option.icon}
                        className="ff-select-icon"
                        alt=""
                      />
                    ) : (
                      option.icon
                    ))}
                  {option.label}
                </span>
              </MenuItem>
            ))}
          </MuiSelect>
          <FormHelperText id={`${props.name}-helper-text`}>
            {props.helperText}
          </FormHelperText>
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

Select.defaultProps = {
  className: '',
  style: {},
  readOnly: false,
  placeholder: 'Select',
  textFieldSize: 'small',
  helperText: '',
  options: [],
  grid: {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
  },
};

export default Select;
