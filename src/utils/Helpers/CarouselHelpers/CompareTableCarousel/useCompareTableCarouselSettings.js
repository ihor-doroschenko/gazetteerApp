import CarouselArrow from 'components/CarouselArrow/CarouselArrow';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSlideAmount } from 'redux/compare-reducer';
import { getSlideAmount } from 'selectors/simple-selectors/compare-selectors';
import { getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import { getCompareWidth } from 'selectors/simple-selectors/table-state-selectors';
import CarouselClasses from '../Carousel.module.css';

export const useCompareTableCarouselSettings = () => {
  const dispatch = useDispatch();
  const compareWidth = useSelector(getCompareWidth);
  const isSideSwitched = useSelector(getIsSideSwitched);
  const dymamicSlideAmount = Math.round(compareWidth / 200);
  const slideAmount = useSelector(getSlideAmount);
  useEffect(() => {
    dispatch(setSlideAmount(dymamicSlideAmount));
  }, [compareWidth]);
  useEffect(() => {
    dispatch(setSlideAmount(2));
  }, [isSideSwitched]);
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
