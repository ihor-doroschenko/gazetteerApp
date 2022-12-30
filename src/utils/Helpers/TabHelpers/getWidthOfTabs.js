import { resultsTabWidth } from 'constants/numericConstants';

// Get width of the tab fpr detail view

export const getWidthOfTabs = detailsListLength => {
  const tabWidth = detailsListLength.toString().length + '0';
  const averageTabWidth = 50 + Number(tabWidth);
  return [averageTabWidth, resultsTabWidth];
};
