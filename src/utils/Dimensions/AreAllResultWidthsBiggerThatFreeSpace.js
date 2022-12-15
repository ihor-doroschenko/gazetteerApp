import { getFreeSpace } from 'utils/Dimensions/getFreeSpace';
import { getWidthPercentages } from './getWidthPercentage';
// TODO: Dimensions utils
export const areAllResultWidthsBiggerThatFreeSpace = getState => {
  const { widthResultsPercentage, widthMatchingsPercentage, widthComparePercentage } =
    getWidthPercentages(getState);
  const freeSpace = getFreeSpace(getState);
  return widthResultsPercentage + widthMatchingsPercentage + widthComparePercentage > freeSpace;
};
