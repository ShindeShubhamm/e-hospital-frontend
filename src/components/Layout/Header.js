import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import { MdAccountCircle } from 'react-icons/md';

const Header = (props) => {
  return (
    <div className="header">
      <AppBar>
        <Container>
          <Toolbar>
            <div className="h-contents">
              <div className="h-logo">
                <h2>eHospital</h2>
              </div>
              <MdAccountCircle size={28} />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
