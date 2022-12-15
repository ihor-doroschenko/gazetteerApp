import { additionalResultsMaxHeightPercentage } from 'constants/numericConstants';

export const getAdditionalResultMaxHeight = height => {
  return (height * additionalResultsMaxHeightPercentage) / 100;
};
