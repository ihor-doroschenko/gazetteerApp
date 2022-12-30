// Compare if id and gazName of two entities are not the same

export const areIdAndGazNameNotEqual = ({ id, gazName, element }) => {
  return element.id !== id && element.gazName !== gazName;
};
