export const getIsMouseOverElementInfinite = (elementInfinite, entityId, entityGazName) => {
  const { id, gazName } = elementInfinite;
  return id === entityId && gazName === entityGazName;
};
