import { getOriginalMetaAttributes } from 'constants/getOriginalMetaAttributes';
import { referenceTypes } from 'utils/Preprocessing/AdditionalNormalizing/referenceTypesGOV/referenceTypes';
import { getOriginalEntity } from './getOriginalEntity';

// Get meta attribute from original (non-normalized) attribute

export const getMetaAttributeFromOriginalAttributes = (element, originalEntries, metaAttribute) => {
  const { gazName } = element;
  const originalElement = getOriginalEntity(originalEntries, element);
  const originalAttribute = getOriginalMetaAttributes(metaAttribute, gazName);
  if (Array.isArray(originalAttribute)) {
    return originalAttribute.map(el => originalElement[el]).join('; ');
  }
  if (gazName === 'gov' && metaAttribute === 'type') {
    return referenceTypes(originalElement.type);
  }
  return originalElement[originalAttribute] || '';
};
