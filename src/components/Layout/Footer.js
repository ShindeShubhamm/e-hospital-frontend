import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-content">
        <p className="f-text">
          Copyright <span className="f-copyright">&copy;</span> {new Date().getFullYear()} Rx.Online
        </p>
        <p className="f-text-secondary">All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
