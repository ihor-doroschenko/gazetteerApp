import { getGOVTypes } from 'constants/getGOVTypes';

// Reference types of GOV-entities (convert type values from numeric codes to terms)

export const referenceTypesEntity = entity => {
  const GOVtypes = getGOVTypes();
  const { value, ...rest } = entity;
  const newGOVtypes = GOVtypes[value];
  const [type, typeGroup] = newGOVtypes;
  return { ...rest, type: type, typeGroup: typeGroup };
};
