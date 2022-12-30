import { getFreeSpace } from 'utils/Dimensions/getFreeSpace';
import { getWidthPercentages } from './getWidthPercentage';

// Check whether widths of all result tables bigger than free space left in the app. Note that free space is not equal to the viewport width as there is also search area switcher that takes some space as well. Basicallz, free space means viewport width - search area switcher - some padding in between

export const areAllResultWidthsBiggerThatFreeSpace = getState => {
  const { widthResultsPercentage, widthMatchingsPercentage, widthComparePercentage } =
    getWidthPercentages(getState);
  const freeSpace = getFreeSpace(getState);
  return widthResultsPercentage + widthMatchingsPercentage + widthComparePercentage > freeSpace;
};
