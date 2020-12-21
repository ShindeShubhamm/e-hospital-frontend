import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import { MdMenu } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
  const { navLinks, handleDrawer } = props;

  return (
    <div className="header">
      <AppBar>
        <Container>
          <Toolbar>
            <div className="h-contents">
              <div className="h-left-contents">
                <button type="button" className="h-menu-button" onClick={() => handleDrawer(true)}>
                  <MdMenu className="h-menu-icon" />
                </button>
                <Link to="/" className="h-logo-container">
                  <img src="/images/rx_online.svg" alt="Rx.Online" className="h-logo" />
                </Link>
              </div>
              <div className="h-right-contents">
                {navLinks.map((link) => (
                  <NavLink
                    exact
                    to={link.route}
                    key={link.route}
                    className="h-link"
                    activeClassName="h-link-active"
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
