import { getRightContainerElementDefaultWidth } from 'constants/getRightContainerMaxWidth';

export const getMapWidthBottom = (matchingOrCompare, value) => {
  const compareToolDashboardWidth = getRightContainerElementDefaultWidth();
  return matchingOrCompare ? `calc(${value} - ${compareToolDashboardWidth}px)` : value;
};
