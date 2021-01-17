import React from 'react';

import { Container, Grid } from '@material-ui/core';

import InfoCard from '../../common/cards/InfoCard';
import { servicesData } from './data';

const Services = () => {
  return (
    <div className="landing-services">
      <Container>
        <h1 className="title">Why us?</h1>
        <div className="ls-cards">
          <Grid container>
            {servicesData.map((data, index) => (
              <Grid item key={index} xs={12} sm={12} md={6} lg={3} xl={3}>
                <InfoCard {...data} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Services;
