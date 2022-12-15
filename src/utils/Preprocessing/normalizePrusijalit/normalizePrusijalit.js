import { convertArrayItemsToNumbers } from 'utils/Converting/convertArrayItemsToNumbers';

// Normalize the Prusijalit gazetteer.
// Renaming `idx` attribute to `id` attribute.
// Renaming `lithuanian name` attribute to `name` attribute.
// Renaming `lon` attribute to `lng` attribute.
// Coercing value of `id` attribute to string data type.
// Combining the attributes `lat` and `lng` into one attribute `position`. Coercing the coordinates to float number data type.

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
