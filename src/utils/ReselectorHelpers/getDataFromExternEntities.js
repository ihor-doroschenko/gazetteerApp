import { gazetteerInfo } from 'constants/getGazetteerInfo';
import { getResultsObjectForTable } from 'utils/FactoryFunctions/getResultsObjectForTable';
import { isGazetteerInUsedGazetteers } from 'utils/validators/isGazetteerInUsedGazetteers';

// Generate results object for extern entities from gazetteers not used in current request

export const getDataFromExternEntities = (data, externEntities, usedGazetteers) => {
  for (const key of Object.keys(externEntities)) {
    if (!isGazetteerInUsedGazetteers(usedGazetteers, key)) {
      const gazObj = gazetteerInfo[key];
      const newSeparateEntry = getResultsObjectForTable(key, gazObj.text, 'done', '#CEE3EA');
      data.push(newSeparateEntry);
    }
  }
};
