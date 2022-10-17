import { convertArrayItemsToNumbers } from 'utils/Converting/convertArrayItemsToNumbers';

// In some gazetteers the attribute names can be in German

export const normalizePrusijalit = database => {
  return database
    .filter(item => item.idx || item['lithuanian name'])
    .map(item => {
      let { idx: id, ['lithuanian name']: name, lat, lon: lng, ...rest } = item;
      const position = convertArrayItemsToNumbers([lat, lng]);
      id = id.toString();
      return { id, name, position: position, ...rest };
    });
};
