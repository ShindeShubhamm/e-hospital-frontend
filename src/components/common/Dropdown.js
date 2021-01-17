import React, { Fragment } from 'react';

import { Box, Popover } from '@material-ui/core';
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state';

const Dropdown = (props) => {
  const {
    primary,
    secondary,
    anchorOrigin,
    transformOrigin,
    className,
  } = props;

  return (
    <div className={className}>
      <PopupState variant="popover" popupId="popover">
        {(popupState) => (
          <Fragment>
            <div {...bindTrigger(popupState)}>{primary}</div>

            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={anchorOrigin}
              transformOrigin={transformOrigin}
              className="ui-popover"
            >
              <Box onClick={popupState.close}>{secondary}</Box>
            </Popover>
          </Fragment>
        )}
      </PopupState>
    </div>
  );
};

Dropdown.defaultProps = {
  className: '',
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
};

export default Dropdown;
