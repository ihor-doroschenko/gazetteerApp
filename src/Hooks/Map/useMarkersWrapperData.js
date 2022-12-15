import { useSelector } from 'react-redux';
import { getExternEntities, getUsedGazetteers } from 'selectors/simple-selectors/results-selectors';

// Hook to combine both data from used gazetteers and extern entities if there are any to produce marker/cluster visualization

export function useMarkersWrapperData() {
  const usedGazetteers = useSelector(getUsedGazetteers);
  const externEntities = useSelector(getExternEntities);
  return Array.from(new Set(usedGazetteers.concat(Object.keys(externEntities))));
}
