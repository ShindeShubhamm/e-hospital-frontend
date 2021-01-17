import React from 'react';

import { Container, Grid } from '@material-ui/core';

import { statsData } from './data';

const StatCard = (props) => {
  const { icon: Icon, number, text } = props;
  return (
    <div className="stat-card">
      {Icon}
      <h1 className="stat-text">{text}</h1>
      <h1 className="stat-num">{number}</h1>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="landing-stats">
      <Container>
        <div className="ls-container">
          <Grid container>
            {statsData.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={index}>
                <StatCard {...stat} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Stats;
