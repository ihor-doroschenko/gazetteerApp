import { convertArrayItemsToNumbers } from 'utils/Converting/convertArrayItemsToNumbers';

// Wikidata entities does not have "name" attribute. To support modular system, this attribute is created on the fly by taking the first value of "names" attribute

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
