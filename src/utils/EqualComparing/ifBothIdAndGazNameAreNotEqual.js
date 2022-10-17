export const ifBothIdAndGazNameAreNotEqual = ({ id, gazName, element }) => {
  return element.id !== id && element.gazName !== gazName;
};
