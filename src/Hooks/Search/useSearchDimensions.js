import { contentHeight, defaultExtraSpace, defaultSearchWidth } from 'constants/numericConstants';
import useWindowDimensions from 'Hooks/useWindowDimensions';
import { useSearchBottomDimensions } from './useSearchBottomDimensions';
import { useSearchWidth } from './useSearchWidth';

// Hook to control dimenions of the search area

export function useSearchDimensions() {
  let { width, height } = useWindowDimensions();
  const { actualHeight } = useSearchBottomDimensions();
  const { searchWidth, setSearchWidth } = useSearchWidth();
  const searchHeight = (height * contentHeight) / 100 - actualHeight;
  const searchMinWidth = (defaultSearchWidth * width) / 100;
  const searchMaxWidth = (defaultSearchWidth * width) / 100 + defaultExtraSpace;
  const sideSearchHeight = (58 * height) / contentHeight;
  return {
    searchWidth,
    sideSearchHeight,
    setSearchWidth,
    searchHeight,
    searchMinWidth,
    searchMaxWidth,
  };
}
