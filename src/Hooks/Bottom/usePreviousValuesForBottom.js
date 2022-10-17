import { usePrevious } from '../usePrevious';

// Hook to provide a container to use previous values for data and details in bottom view

export const usePreviousValuesForBottom = (data, details) => {
  const previousData = usePrevious(data);
  const previousDetails = usePrevious(details);
  return { previousData, previousDetails };
};
