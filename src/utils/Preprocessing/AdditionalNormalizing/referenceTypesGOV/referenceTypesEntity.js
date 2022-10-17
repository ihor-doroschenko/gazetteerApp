import { getGOVTypes } from 'constants/getGOVTypes';

export const referenceTypesEntity = entity => {
  const GOVtypes = getGOVTypes();
  const { value, ...rest } = entity;
  const newGOVtypes = GOVtypes[value];
  const [type, typeGroup] = newGOVtypes;
  return { ...rest, type: type, typeGroup: typeGroup };
};
