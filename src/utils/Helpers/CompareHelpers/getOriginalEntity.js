import { getOriginalMetaAttributes } from 'constants/getOriginalMetaAttributes';

// Get original (non-normalized) gazetteer entity

export function getOriginalEntity(originalEntities, element) {
  const { gazName, entity } = element;
  const originalMetaAttribute = getOriginalMetaAttributes('id', gazName);
  return originalEntities[gazName].find(
    originalEntity => originalEntity[originalMetaAttribute].toString() === entity.id
  );
}
