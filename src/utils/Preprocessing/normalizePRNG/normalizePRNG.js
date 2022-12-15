import { convertArrayItemsToNumbers } from 'utils/Converting/convertArrayItemsToNumbers';

// Normalize the PRNG gazetteer.
// Renaming `main name` attribute to `name` attribute.
// Renaming `object type` attribute to `type` attribute.
// Renaming `lat normalized` attribute to `lat` attribute.
// Renaming `lon normalized` attribute to `lng` attribute.
// Renaming `lat` attribute to `geograph_lat` attribute.
// Renaming `lon` attribute to `geograph_lng` attribute.
// Coercing value of `id` attribute to string data type.
// Combining the attributes `lat` and `lng` into one attribute `position`. Coercing the coordinates to float number data type.

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
