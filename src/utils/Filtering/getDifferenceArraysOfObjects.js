export const getDifferenceArraysOfObjects = (array1, array2) => {
  return array1.filter(
    ({ details: detail1 }) => !array2.some(({ details: detail2 }) => detail1 === detail2)
  );
};

export const getDifferenceArraysOfObjectsID = (array1, array2) => {
  return array1.filter(
    ({ details: detail1 }) => !array2.some(({ details: detail2 }) => detail1.id === detail2.id)
  );
};
