import CarouselArrow from 'components/CarouselArrow/CarouselArrow';
import React from 'react';
import CarouselClasses from '../Carousel.module.css';

// Get slick (carousel) settings for the compare table

export const getCompareTableCarouselSettings = slideAmount => {
  return {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slideAmount,
    slidesToScroll: 1,
    nextArrow: <CarouselArrow value={true} place='left' />,
    prevArrow: <CarouselArrow value={false} place='right' />,
    className: CarouselClasses.sliderDiv,
  };
};
