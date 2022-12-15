import { convertArrayItemsToNumbers } from 'utils/Converting/convertArrayItemsToNumbers';

// Normalize the Poland16thc gazetteer.
// Renaming `objectid` attribute to `id` attribute.
// Renaming `current name` attribute to `name` attribute.
// Renaming `settlement type` attribute to `type` attribute.
// Renaming `lon` attribute to `lng` attribute.
// Combining the attributes `lat` and `lng` into one attribute `position`. Coercing the coordinates to float number data type.
// Coercing value of `id` attribute to string data type.
// Transformation of all attribute values having `null` to empty string `''`.

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
