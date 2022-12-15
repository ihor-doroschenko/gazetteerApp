import CarouselArrow from 'components/CarouselArrow/CarouselArrow';
import React from 'react';
import { getSlidesToShow } from './getSlidesToShow';

// Get settings for slick wrapper (carousel) in bottom view

export const getBottomViewCarouselSettings = (data, setCurrentIndex) => {
  return {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: getSlidesToShow(data),
    slidesToScroll: 1,
    nextArrow: <CarouselArrow value={true} />,
    prevArrow: <CarouselArrow value={false} />,
    afterChange: current => setCurrentIndex(current),
  };
};
