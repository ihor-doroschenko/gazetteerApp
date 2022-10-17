import { getOriginalMetaAttributes } from 'constants/getOriginalMetaAttributes';
import { referenceTypes } from 'utils/Preprocessing/AdditionalNormalizing/referenceTypesGOV/referenceTypes';

export const getMetaAttributeFromOriginalAttributes = (gazName, originalElement, metaAttribute) => {
  const originalAttribute = getOriginalMetaAttributes(metaAttribute, gazName);
  if (Array.isArray(originalAttribute)) {
    return originalAttribute.map(el => originalElement[el]).join('; ');
  }
  if (metaAttribute === 'type' && gazName === 'gov') {
    return referenceTypes(originalElement.type);
  }
  return originalElement[originalAttribute] || '';
};
