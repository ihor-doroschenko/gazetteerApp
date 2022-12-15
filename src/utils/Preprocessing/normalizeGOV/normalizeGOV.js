import { convertArrayItemsToNumbers } from 'utils/Converting/convertArrayItemsToNumbers';
import { getNameGOV } from '../AdditionalNormalizing/getNameGOV';
import { referenceTypes } from '../AdditionalNormalizing/referenceTypesGOV/referenceTypes';

// Normalize the GOV gazetteer.
// Renaming `lon` attribute in `position` to `lng`. Coercing the coordinates to float number data type.
// Reference `type` attribute from number code to unit (e.g. from `2` to ['Amtsbezirk', '(politische) Verwaltung']). Entire list is <a href="http://gov.genealogy.net/type/list">here</a>.
// Re-creating `name` attribute. Already existing `name` attribute contains multiple names and is to understand more as "all appliable names". As the component expects each entity to have one name to show it both in table and on the map and because this attribute does not exist in GOV gazetteer, it is created on the fly. The first name in `name` attribute is taken, all other ones are considered as "all other appliable names" and are saved in separate attribute `names`.
// Coercing value of `id` attribute to string data type.
// GOV has coded types which means that they has to be referenced to be understood. The list of types with reference codes is here http://gov.genealogy.net/type/list

export const normalizeGOV = database => {
  return database
    .filter(item => item.name || item.id || item.type)
    .map(item => {
      let { id, position, name, type, ...rest } = item;
      const lat = position && position.lat ? position.lat : '';
      const lng = position && position.lon ? position.lon : '';
      const referencedType = type ? referenceTypes(type) : '';
      const combinedPosition = convertArrayItemsToNumbers([lat, lng]);
      const nameGOV = getNameGOV(name);
      id = id.toString();
      return {
        id,
        position: combinedPosition,
        type: referencedType,
        name: nameGOV,
        names: name,
        ...rest,
      };
    });
};
