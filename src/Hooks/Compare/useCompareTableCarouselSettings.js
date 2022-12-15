import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSlideAmount } from 'redux/compare-reducer';
import { getSlideAmount } from 'selectors/simple-selectors/compare-selectors';
import { getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import { getCompareWidth } from 'selectors/simple-selectors/table-state-selectors';
import { getCompareTableCarouselSettings } from 'utils/Helpers/CarouselHelpers/CompareTableCarousel/getCompareTableCarouselSettings';

// Hook to generate settings for compare table slick wrapper (carousel)

export const useCompareTableCarouselSettings = () => {
  const dispatch = useDispatch();
  const compareSideWidth = useSelector(getCompareWidth);
  const isSideSwitched = useSelector(getIsSideSwitched);
  const dymamicSlideAmount = Math.round(compareSideWidth / 200);
  const slideAmount = useSelector(getSlideAmount);
  useEffect(() => {
    dispatch(setSlideAmount(dymamicSlideAmount));
  }, [compareSideWidth]);
  useEffect(() => {
    dispatch(setSlideAmount(2));
  }, [isSideSwitched]);
  return getCompareTableCarouselSettings(slideAmount);
};
