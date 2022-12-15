import { getGazetteerInfo } from 'constants/getGazetteerInfo';
import { getResultsObjectForTable } from 'utils/FactoryFunctions/getResultsObjectForTable';
import { checkSeparateEntities } from 'utils/validators/checkSeparateEntities';
import { IsGazetteerInUsedGazetteers } from 'utils/validators/IsGazetteerInUsedGazetteers';

// Generate results object for separate entities from gazetteers not used in current request

export const getDataFromSeparateEntries = (data, externEntities, usedGazetteers) => {
  if (checkSeparateEntities(externEntities)) {
    for (const key of Object.keys(externEntities)) {
      if (!IsGazetteerInUsedGazetteers(usedGazetteers, key)) {
        const gazObj = getGazetteerInfo(key);
        const newSeparateEntry = getResultsObjectForTable(key, gazObj.text, 'separate', '#CEE3EA');
        data.push(newSeparateEntry);
      }
    }
  }
};
