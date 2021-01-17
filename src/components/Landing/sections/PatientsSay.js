import React from 'react';

import { Container } from '@material-ui/core';

import BlockquoteCard from '../../common/cards/BlockquoteCard';
import Carousel from '../../common/Carousel';
import { feedbackData } from './data';

const carouselConfig = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const PatientsSay = () => {
  return (
    <div className="landing-patients">
      <Container>
        <h1 className="title">Patients Say</h1>
        <div className="lpt-carousel">
          <Carousel settings={carouselConfig}>
            {feedbackData.map((data, index) => (
              <BlockquoteCard {...data} key={index} />
            ))}
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default PatientsSay;
