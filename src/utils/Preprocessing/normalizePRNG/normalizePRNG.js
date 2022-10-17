import { convertArrayItemsToNumbers } from 'utils/Converting/convertArrayItemsToNumbers';

// In some gazetteers the attribute names can be in German

export const normalizePRNG = database => {
  return database
    .filter(item => item['main name'] || item.id || item['object type'])
    .map(item => {
      let {
        id,
        ['main name']: name,
        ['object type']: type,
        ['lat normalized']: lat,
        ['lon normalized']: lng,
        latitude: geograph_lat,
        longitude: geograph_lng,
        ...rest
      } = item;
      const position = convertArrayItemsToNumbers([lat, lng]);
      id = id.toString();
      return {
        id,
        name,
        type,
        position: position,
        geograph_lat,
        geograph_lng,
        ...rest,
      };
    });
};
