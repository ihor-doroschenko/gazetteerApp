import { convertArrayItemsToNumbers } from 'utils/Converting/convertArrayItemsToNumbers';

// Normalize the Wikidata gazetteer.
// Re-creating `name` attribute. Already existing `name` attribute contains multiple names and is to understand more as "all appliable names". As the component expects each entity to have one name to show it both in table and on the map and because this attribute does not exist in GOV gazetteer, it is created on the fly. The first name in `name` attribute is taken, all other ones are considered as "all other appliable names" and are saved in separate attribute `names`.
// Transformation of `type` attribute (basically, an object with single string value is coerced into a string).
// Extraction of the latitude and longitude from the `coordinates` attribute, coercing it to float number data type, and save it under new created `position` attribute
// Coercing value of `id` attribute to string data type.

export const normalizeWikidata = database => {
  return database
    .filter(item => item.names || item.id || item.types)
    .map(item => {
      let { id, coordinates, names, types, ...rest } = item;
      const nameWikidata = names[0].name;
      const typeWikidata = types ? types.map(el => ({ type: el.name })) : '';
      const { lat, lon } = coordinates[0];
      const position = convertArrayItemsToNumbers([lat, lon]);
      id = id.toString();
      return {
        id,
        position: position,
        type: typeWikidata,
        name: nameWikidata,
        names,
        ...rest,
      };
    });
};
