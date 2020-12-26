import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { MdMenu } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';

const ElevateScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const Header = (props) => {
  const { navLinks, handleDrawer, auth, onLogout } = props;

  return (
    <div className="header">
      <ElevateScroll {...props}>
        <AppBar>
          <Container>
            <Toolbar>
              <div className="h-contents">
                <div className="h-left-contents">
                  <button
                    type="button"
                    className="h-menu-button"
                    onClick={() => handleDrawer(true)}
                  >
                    <MdMenu className="h-menu-icon" />
                  </button>
                  <Link to="/" className="h-logo-container">
                    <img src="/images/rx_online.svg" alt="Rx.Online" className="h-logo" />
                  </Link>
                </div>
                <div className="h-right-contents">
                  <div className="h-links-container">
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
                    {auth?.isAuthenticated && (
                      <button type="button" onClick={onLogout}>
                        Logout
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevateScroll>
    </div>
  );
};

export default Header;
