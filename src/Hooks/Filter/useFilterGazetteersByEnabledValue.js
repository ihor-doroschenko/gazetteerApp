import { useSelector } from 'react-redux';
import { getGazetteers } from 'selectors/simple-selectors/search-selectors';

export const useFilterGazetteersByEnabledValue = () => {
  const gazetteers = useSelector(getGazetteers);
  return gazetteers.filter(g => g.value).map(g => g.gazName);
};
