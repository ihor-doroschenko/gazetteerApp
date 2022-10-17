import { getOriginalMetaAttributes } from 'constants/getOriginalMetaAttributes';

export function findOriginalEntry(originalEntries, el) {
  return originalEntries[el.gazName].find(
    originalEntity =>
      originalEntity[getOriginalMetaAttributes('id', el.gazName)].toString() === el.entity.id
  );
}
