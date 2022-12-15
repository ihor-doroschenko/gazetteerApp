// Make an object from two arrays of the same length

export const combineTwoArraysIntoObject = ({ headers, values }) => {
  let obj = {};
  headers.forEach((element, index) => {
    obj[element] = values[index];
  });
  return obj;
};
