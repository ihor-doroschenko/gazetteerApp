import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import CarouselArrowClasses from './CarouselArrow.module.css';

const CarouselArrow = props => {
  const { className, style, onClick, value } = props;
  return (
    <div
      className={classNames(className, {
        [CarouselArrowClasses.arrowNext]: value,
        [CarouselArrowClasses.arrowPrev]: !value,
      })}
      style={{ ...style, display: 'block', zIndex: '1' }}>
      <div className={CarouselArrowClasses.arrow} onClick={onClick}>
        <TooltipContainer
          placement='left'
          icon={value ? faAngleRight : faAngleLeft}
          text={value ? 'tt_carousel_next' : 'tt_carousel_back'}
          delay={true}
        />
      </div>
    </div>
  );
};
export default CarouselArrow;
