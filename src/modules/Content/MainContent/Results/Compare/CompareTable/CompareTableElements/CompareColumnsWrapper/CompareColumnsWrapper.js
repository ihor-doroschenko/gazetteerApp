import Preloader from 'components/Preloader/Preloader';
import { useCompareTableColumns } from 'Hooks/Compare/useCompareTableColumns';
import { useCompareTableData } from 'Hooks/Compare/useCompareTableData';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { getEntitiesToCompare, getSlideAmount } from 'selectors/simple-selectors/compare-selectors';
import { getCompareWidth } from 'selectors/simple-selectors/table-state-selectors';
import { useCompareTableCarouselSettings } from 'utils/Helpers/CarouselHelpers/CompareTableCarousel/useCompareTableCarouselSettings';
import CompareColumn from './CompareColumn/CompareColumn';

const CompareColumnsWrapper = React.forwardRef(({ customRef }) => {
  let slider = useRef();
  const compareTableCarouselSettings = useCompareTableCarouselSettings();
  const { gazetteerCols } = useCompareTableColumns();
  const entitiesToCompare = useSelector(getEntitiesToCompare);
  const { data } = useCompareTableData(entitiesToCompare);
  const compareWidth = useSelector(getCompareWidth);
  const slideAmount = useSelector(getSlideAmount);

  useEffect(() => {
    slider.slickGoTo(entitiesToCompare.length - slideAmount);
  }, [entitiesToCompare]);
  useEffect(() => {
    if (entitiesToCompare.length > slideAmount) {
      slider.slickGoTo(1);
    }
  }, [compareWidth]);

  return (
    <Slider ref={sl => (slider = sl)} {...compareTableCarouselSettings}>
      {gazetteerCols.map(el => {
        return <CompareColumn data={data} customRef={customRef} col={[el]} />;
      })}
      {entitiesToCompare
        .filter(el => el.loading)
        .map(el => {
          return <Preloader gazName={el.gazName} />;
        })}
    </Slider>
  );
});

export default CompareColumnsWrapper;
