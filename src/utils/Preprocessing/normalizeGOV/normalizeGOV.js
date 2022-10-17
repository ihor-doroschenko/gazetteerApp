import { convertArrayItemsToNumbers } from 'utils/Converting/convertArrayItemsToNumbers';
import { getNameGOV } from '../AdditionalNormalizing/getNameGOV';
import { referenceTypes } from '../AdditionalNormalizing/referenceTypesGOV/referenceTypes';

// GOV has coded types which means that they has to be referenced to be understood. The list of types with reference codes is here http://gov.genealogy.net/type/list

// GOV entities does not have "name" attribute. To support modular system, this attribute is created on the fly by taking the first value of "names" attribute

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
