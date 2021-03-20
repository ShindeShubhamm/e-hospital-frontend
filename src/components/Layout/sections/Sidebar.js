import React from 'react';

import { SwipeableDrawer } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  const { open, onOpen, onClose, navLinks, onLinkClick } = props;

  return (
    <SwipeableDrawer open={open} onOpen={onOpen} onClose={onClose}>
      <div className="l-side-links">
        {navLinks.map((link) => (
          <NavLink
            exact
            to={link.route}
            key={link.route}
            onClick={onLinkClick}
            className="l-sidelink"
            activeClassName="l-sidelink-active"
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </SwipeableDrawer>
  );
};

Sidebar.defaultProps = {
  open: false,
  onOpen: () => {},
  onClose: () => {},
  navLinks: [],
  onLinkClick: () => {},
};

export default Sidebar;
