import { getGazetteerInfo } from 'constants/getGazetteerInfo';
import { getResultsObjectForTable } from 'utils/FactoryFunctions/getResultsObjectForTable';
import { checkStatus } from 'utils/validators/checkStatus';
import { IsGazetteerInUsedGazetteers } from 'utils/validators/IsGazetteerInUsedGazetteers';

// Generate results object for entities from gazetteers used in current request

export const getDataFromOriginalEntities = (data, status, entries, usedGazetteers) => {
  Object.entries(status).forEach(([key, value]) => {
    if (IsGazetteerInUsedGazetteers(usedGazetteers, key)) {
      const gazObj = getGazetteerInfo(key);
      data.push(getResultsObjectForTable(key, gazObj.text, value, gazObj.color));
      if (checkStatus(value, 'done')) {
        const objIndex = data.findIndex(obj => obj.gazName === key);
        data[objIndex].types = entries[key];
      }
    }
  });
};
