import Preloader from 'components/Preloader/Preloader';
import { useCompareTableCarouselSettings } from 'Hooks/Compare/useCompareTableCarouselSettings';
import { useCompareTableColumns } from 'Hooks/Compare/useCompareTableColumns';
import { useCompareTableData } from 'Hooks/Compare/useCompareTableData';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { getEntitiesToCompare, getSlideAmount } from 'selectors/simple-selectors/compare-selectors';
import { getCompareWidth } from 'selectors/simple-selectors/table-state-selectors';
import CompareColumn from './CompareColumn/CompareColumn';

// Wrapper component to contain slider (react-slick element, so called carousel) for the columns of the compare table. The component reacts on the changes in amount of the entities to be compared and on changes of the table width

const CompareColumnsWrapper = React.forwardRef(({ customRef }) => {
  let slider = useRef();
  const compareTableCarouselSettings = useCompareTableCarouselSettings();
  const { gazetteerCols } = useCompareTableColumns();
  const entitiesToCompare = useSelector(getEntitiesToCompare);
  const { data } = useCompareTableData(entitiesToCompare);
  const compareSideWidth = useSelector(getCompareWidth);
  const slideAmount = useSelector(getSlideAmount);

  useEffect(() => {
    slider.slickGoTo(entitiesToCompare.length - slideAmount);
  }, [entitiesToCompare]);
  useEffect(() => {
    if (entitiesToCompare.length > slideAmount) {
      slider.slickGoTo(1);
    }
  }, [compareSideWidth]);

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
