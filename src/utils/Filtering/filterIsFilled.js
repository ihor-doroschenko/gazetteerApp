// Filter data for details view and return only those attributes that have values (with removing empty attributes)

export const filterIsFilled = (value, elements) => {
  return value
    ? Object.keys(elements)
        .filter(key => {
          if (elements[key]) {
            if (Array.isArray(elements[key])) {
              return getElementsKey(elements, key);
            } else {
              return elements[key];
            }
          }
          return;
        })
        .reduce((r, k) => ((r[k] = elements[k]), r), {})
    : elements;
};

const getElementsKey = (elements, key) => {
  if (elements[key].length !== 0) {
    return elements[key];
  }
};
