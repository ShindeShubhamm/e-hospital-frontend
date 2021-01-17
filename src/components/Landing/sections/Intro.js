import React from 'react';

import { Container } from '@material-ui/core';

const Intro = () => {
  return (
    <div className="landing-intro">
      <Container>
        <div className="intro">
          <h1 className="title">Health Assistance at your Convenience</h1>
          <h2 className="subtitle">
            Rx.Online is your ultimate tool for instant research on medical
            advice. Whether you're looking for quick advice on medical concerns,
            assistance with prescriptions, of first aid assistance. Rx.Online
            has got you covered.
          </h2>
        </div>
      </Container>
    </div>
  );
};

export default Intro;
