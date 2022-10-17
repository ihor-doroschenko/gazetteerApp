export const getWidthOfTabs = filteredDetailsLength => {
  const resultsTabWidth = 100;
  const tabWidth = filteredDetailsLength.toString().length + '0';
  const averageTabWidth = 50 + Number(tabWidth);
  return [averageTabWidth, resultsTabWidth];
};
