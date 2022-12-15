import { getOriginalMetaAttributes } from 'constants/getOriginalMetaAttributes';

// Get original (non-normalized) gazetteer entity

export function getOriginalEntity(originalEntries, element) {
  const { gazName, entity } = element;
  const originalMetaAttribute = getOriginalMetaAttributes('id', gazName);
  return originalEntries[gazName].find(
    originalEntity => originalEntity[originalMetaAttribute].toString() === entity.id
  );
}
