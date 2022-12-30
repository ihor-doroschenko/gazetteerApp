import { gazetteerInfo } from 'constants/getGazetteerInfo';
import { getResultsObjectForTable } from 'utils/FactoryFunctions/getResultsObjectForTable';
import { checkStatus } from 'utils/validators/checkStatus';
import { isGazetteerInUsedGazetteers } from 'utils/validators/isGazetteerInUsedGazetteers';

// Generate results object for entities from gazetteers used in current request

export const getDataFromOriginalEntities = (data, status, entities, usedGazetteers) => {
  Object.entries(status).forEach(([key, value]) => {
    if (isGazetteerInUsedGazetteers(usedGazetteers, key)) {
      const gazObj = gazetteerInfo[key];
      data.push(getResultsObjectForTable(key, gazObj.text, value, gazObj.color));
      if (checkStatus(value, 'done')) {
        const objIndex = data.findIndex(obj => obj.gazName === key);
        data[objIndex].types = entities[key];
      }
    }
  });
};
