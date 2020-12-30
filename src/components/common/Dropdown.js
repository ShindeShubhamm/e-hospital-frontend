import React, { Fragment } from 'react';

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state';

const Dropdown = (props) => {
  const { primary, secondary, anchorOrigin, transformOrigin, className } = props;

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
            >
              <Box>
                <List onClick={popupState.close} dense>
                  {secondary}
                </List>
              </Box>
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
