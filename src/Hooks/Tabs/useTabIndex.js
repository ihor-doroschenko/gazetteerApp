import { useEffect, useState } from 'react';
import { handleTabState } from 'utils/Helpers/TabHelpers/handleTabState';

// Hook to update tab index on change in data (details array)

export function useTabIndex(data) {
  const [tabIndex, setTabIndex] = useState(0);
  useEffect(() => {
    setTabIndex(handleTabState(data));
  }, [data]);

  return { tabIndex, setTabIndex };
}
