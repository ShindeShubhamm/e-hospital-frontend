import React from 'react';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = (props) => {
  const { settings, children } = props;

  return (
    <Slider className="carousel-component" {...settings}>
      {children}
    </Slider>
  );
};

Carousel.defaultProps = {
  settings: {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  },
};

export default Carousel;
