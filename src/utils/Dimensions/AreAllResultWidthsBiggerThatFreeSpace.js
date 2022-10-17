import { getFreeSpace } from 'utils/Dimensions/getFreeSpace';
import { getWidthPercentages } from './getWidthPercentage';

export const AreAllResultWidthsBiggerThatFreeSpace = getState => {
  const { widthResultsPercentage, widthMatchingsPercentage, widthComparePercentage } =
    getWidthPercentages(getState);
  const freeSpace = getFreeSpace(getState);
  return widthResultsPercentage + widthMatchingsPercentage + widthComparePercentage > freeSpace;
};
