import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getExternEntities,
  getStartEntries,
  getUsedGazetteers,
} from 'selectors/simple-selectors/results-selectors';
import { getMatchingsLength } from 'utils/Helpers/Matchings/getMatchingsLength';
import { getHeadForGazetteersWrapper } from 'utils/Helpers/TableHelpers/GazetteerResultsHead/getHeadForGazetteersWrapper';

// Hook to control head title and to keep it updated

export function useGazetteerResultsHeadTitle(original) {
  const { text, actualState, ...rest } = original;
  const [state, setState] = useState(`${text} [0] [0]`);
  const usedGazetteers = useSelector(getUsedGazetteers);
  const startEntries = useSelector(getStartEntries);
  const externEntities = useSelector(getExternEntities);

  useEffect(() => {
    const { gazName, types } = rest;
    const matchingsLength = getMatchingsLength(types, actualState);
    const headForGazetteers = getHeadForGazetteersWrapper({
      usedGazetteers,
      text,
      startEntries,
      gazName,
      externEntities,
      matchingsLength,
    });
    setState(headForGazetteers);
  }, [actualState, externEntities]);

  return state;
}
