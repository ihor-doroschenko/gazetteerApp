import { getResultsObjectForTable } from 'utils/FactoryFunctions/getResultsObjectForTable';

export const getDataFromSeparateEntries = (data, separateEntries, gazetteers, details) => {
  if (Object.keys(separateEntries).length !== 0) {
    for (const key of Object.keys(separateEntries)) {
      if (!data.some(d => d.gazName === key)) {
        const gazeteer = gazetteers.find(g => g.gazName === key);
        const newSeparateEntry = getResultsObjectForTable(
          key,
          gazeteer.text,
          'separate',
          '#CEE3EA'
        );
        data.push(newSeparateEntry);
      } else if (data.some(d => d.gazName === key)) {
        const index = data.findIndex(d => d.gazName === key);
        const filteredSeparateEntities = details.filter(({ details: detail }) =>
          separateEntries[key].some(el => detail.id === el)
        );
        if (data[index].types.length === 0) {
          data[index].actualState = 'separate';
        }
        data[index].types = data[index].types.concat(filteredSeparateEntities);
      }
    }
  }
};
