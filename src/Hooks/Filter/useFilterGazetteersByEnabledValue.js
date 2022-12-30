import { useSelector } from 'react-redux';
import { getGazetteers } from 'selectors/simple-selectors/search-selectors';

// Hook to filter gazetteers in the search form by enabled value (whether they are selected for the search or not)

export const useFilterGazetteersByEnabledValue = () => {
  const gazetteers = useSelector(getGazetteers);
  return gazetteers.filter(g => g.value).map(g => g.gazName);
};
