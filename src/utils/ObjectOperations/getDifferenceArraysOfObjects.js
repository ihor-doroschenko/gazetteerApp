// Get difference between two arrays of objects by entity or by property of entity

export const getDifferenceArraysOfObjects = (array1, array2, prop = false) => {
  return array1.filter(
    ({ detail: detail1 }) =>
      !array2.some(({ detail: detail2 }) => {
        return prop ? detail1[prop] === detail2[prop] : detail1 === detail2;
      })
  );
};
