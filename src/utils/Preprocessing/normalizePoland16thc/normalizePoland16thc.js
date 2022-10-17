import { convertArrayItemsToNumbers } from 'utils/Converting/convertArrayItemsToNumbers';

// In some gazetteers the attribute names can be in Polish

export const normalizePoland16thc = database => {
  return database
    .filter(item => item.objectid || item['current name'] || item['settlement type'])
    .map(item => {
      let {
        objectid: id,
        ['current name']: name,
        ['settlement type']: type,
        lat,
        lon: lng,
        ...rest
      } = item;
      const position = convertArrayItemsToNumbers([lat, lng]);
      id = id.toString();
      name = !name ? '' : name;
      return { id, name, position: position, type, ...rest };
    });
};
