import { usePrevious } from 'Hooks/usePrevious';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'react-table-6/react-table.css';
import { mouseClickMarkerToInitial } from 'redux/map-interaction-reducer';
import { getResults } from 'selectors/reselectors/getResults';
import { getDetails } from 'selectors/simple-selectors/details-selectors';
import { getMouseClickedElement } from 'selectors/simple-selectors/map-interaction-selectors';
import { getUsedGazetteers } from 'selectors/simple-selectors/results-selectors';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { getBottomViewCarouselSettings } from 'utils/Helpers/CarouselHelpers/BottomViewCarousel/getBottomViewCarouselSettings';
import { goToCarouselIndex } from 'utils/Helpers/CarouselHelpers/BottomViewCarousel/goToCarouselIndex';
import { getBottomTables } from 'utils/Helpers/TableHelpers/getBottomTables';
import { getEmptyTablesInBottomView } from 'utils/Helpers/TableHelpers/getEmptyTablesInBottomView';
import { getDifferenceArraysOfObjects } from 'utils/ObjectOperations/getDifferenceArraysOfObjects';
import { isGazetteerInUsedGazetteers } from 'utils/validators/isGazetteerInUsedGazetteers';
import NoDataBottom from '../TableBodyContainer/NoData/NoDataBottom';
import ResultsTableBottomViewClasses from './ResultsTableBottomView.module.css';

// Wrapper to contain functionalities to handle autoscroll and to form the elements of the results table in bottom view. The wrapper is of the first order for the ResultsTableBottom component

const ResultsTableBottomFunctionalContainer = props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let slider = useRef();
  const dispatch = useDispatch();
  const detailsList = useSelector(getDetails);
  const data = useSelector(getResults);
  const mouseClickedElement = useSelector(getMouseClickedElement);
  const previousDetails = usePrevious(detailsList);
  const usedGazetteers = useSelector(getUsedGazetteers);

  useEffect(() => {
    const nextCarouselIndex = data.findIndex(el => el.gazName === mouseClickedElement.gazName);
    goToCarouselIndex(nextCarouselIndex, currentIndex, setCurrentIndex, slider);
    dispatch(mouseClickMarkerToInitial());
  }, [mouseClickedElement.id]);

  useEffect(() => {
    if (previousDetails) {
      const [difference] = getDifferenceArraysOfObjects(detailsList, previousDetails, 'id');
      const isInUsedGazetteers = isGazetteerInUsedGazetteers(usedGazetteers, difference.gazName);
      if (isInUsedGazetteers) {
        const nextCarouselIndex = data.findIndex(el => el.gazName === difference.gazName);
        goToCarouselIndex(nextCarouselIndex, currentIndex, setCurrentIndex, slider);
      } else {
        const nextCarouselIndex = data.length + 1;
        goToCarouselIndex(nextCarouselIndex, currentIndex, setCurrentIndex, slider);
      }
    }
  }, [detailsList.length]);

  const bottomTables = getBottomTables(data);
  const emptyTablesInBottomView = getEmptyTablesInBottomView(data);
  const areEmptyTablesInBottomView = emptyTablesInBottomView.length !== 0;
  return (
    <div className={ResultsTableBottomViewClasses.wrapperBottomTables}>
      <Slider ref={sl => (slider = sl)} {...getBottomViewCarouselSettings(data, setCurrentIndex)}>
        {bottomTables}
        {areEmptyTablesInBottomView && <NoDataBottom />}
      </Slider>
    </div>
  );
};

export default ResultsTableBottomFunctionalContainer;
