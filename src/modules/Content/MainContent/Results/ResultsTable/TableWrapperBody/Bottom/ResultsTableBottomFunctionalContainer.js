import { usePreviousValuesForBottom } from 'Hooks/Bottom/usePreviousValuesForBottom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'react-table-6/react-table.css';
import { mouseClickClear } from 'redux/map-interaction-reducer';
import { getResults } from 'selectors/reselectors/getResults';
import { getDetails } from 'selectors/simple-selectors/details-selectors';
import { getMouseClickedElement } from 'selectors/simple-selectors/map-interaction-selectors';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { getDifferenceArraysOfObjectsID } from 'utils/Filtering/getDifferenceArraysOfObjects';
import { getBottomViewCarouselSettings } from 'utils/Helpers/CarouselHelpers/BottomViewCarousel/getBottomViewCarouselSettings';
import { goToCarouselIndex } from 'utils/Helpers/CarouselHelpers/BottomViewCarousel/goToCarouselIndex';
import NoDataBottom from '../TableBodyContainer/NoData/NoDataBottom';
import ResultsTableBottom from './ResultsTableBottom';
import ResultsTableBottomViewClasses from './ResultsTableBottomView.module.css';

const ResultsTableBottomFunctionalContainer = props => {
  const dispatch = useDispatch();
  const details = useSelector(getDetails);
  const data = useSelector(getResults);
  const mouseClickedElement = useSelector(getMouseClickedElement);

  const [currentIndex, setCurrentIndex] = useState(0);

  let slider = React.createRef();

  const { previousData, previousDetails } = usePreviousValuesForBottom(data, details);

  useEffect(() => {
    goToCarouselIndex(data, mouseClickedElement, currentIndex, setCurrentIndex, slider);
    dispatch(mouseClickClear());
  }, [mouseClickedElement.id]);

  useEffect(() => {
    if (previousData && previousData.length > data.length) {
      slider.slickGoTo(0);
    }
  }, [data.length]);

  useEffect(() => {
    if (previousDetails) {
      const [difference] = getDifferenceArraysOfObjectsID(details, previousDetails);
      if (difference) {
        goToCarouselIndex(data, difference, currentIndex, setCurrentIndex, slider);
      }
    }
  }, [details.length]);

  const bottomTables = data.map((d, index) => {
    return (
      d.actualState !== 'noData' && <ResultsTableBottom data={d} details={details} key={index} />
    );
  });
  return (
    <div className={ResultsTableBottomViewClasses.wrapperBottomTables}>
      <Slider ref={sl => (slider = sl)} {...getBottomViewCarouselSettings(data, setCurrentIndex)}>
        {bottomTables}
        <NoDataBottom />
      </Slider>
    </div>
  );
};

export default ResultsTableBottomFunctionalContainer;
