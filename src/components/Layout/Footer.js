import React from 'react';

import Container from '@material-ui/core/Container';

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-content">
        <p className="f-text">
          Copyright {' '}
          <span className="f-copyright">
            &copy;
          </span> {new Date().getFullYear()} eHospital
        </p>
        <p className="f-text-secondary">All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
