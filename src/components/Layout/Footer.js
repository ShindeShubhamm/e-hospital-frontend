import React from 'react';

import { Container } from '@material-ui/core';
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterFill,
  RiYoutubeFill,
} from 'react-icons/ri';

const socialData = [
  {
    icon: RiFacebookBoxFill,
    title: 'Facebook',
    link: 'https://facebook.com',
  },
  {
    icon: RiInstagramFill,
    title: 'Instagram',
    link: 'https://instagram.com',
  },
  {
    icon: RiTwitterFill,
    title: 'Twitter',
    link: 'https://twitter.com',
  },
  {
    icon: RiYoutubeFill,
    title: 'YouTube',
    link: 'https://youtube.com',
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="f-content">
          <img
            src="/images/rx_online.svg"
            alt="Rx.Online Logo"
            className="f-logo"
          />
          <div className="f-social-media">
            {socialData.map((data) => (
              <a
                href={data.link}
                target="_blank"
                rel="noreferrer"
                title={data.title}
                className="f-icon-link"
              >
                <data.icon className="f-icon" />
              </a>
            ))}
          </div>
        </div>
      </Container>
      <div className="f-bottom">
        <Container>
          <p className="f-text">
            Copyright <span className="f-copyright">&copy;</span>{' '}
            {new Date().getFullYear()} Rx.Online
          </p>
          <p className="f-text-secondary">All Rights Reserved.</p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
