import { additionalResultsMaxHeightPercentage } from 'constants/numericConstants';

// Get maximal height for the additional result table

export const getAdditionalResultMaxHeight = height => {
  return (height * additionalResultsMaxHeightPercentage) / 100;
};
