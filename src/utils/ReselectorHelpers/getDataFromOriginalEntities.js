import { getResultsObjectForTable } from 'utils/FactoryFunctions/getResultsObjectForTable';

export const getDataFromOriginalEntities = (data, status, entries, gazetteers) => {
  Object.entries(status).forEach(([key, value]) => {
    const gazeteer = gazetteers.find(g => g.gazName === key);
    data.push(getResultsObjectForTable(key, gazeteer.text, value, gazeteer.color));
    if (value === 'done') {
      const objIndex = data.findIndex(obj => obj.gazName === key);
      data[objIndex].types = entries[key];
    }
  });
};
