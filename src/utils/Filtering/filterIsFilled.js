export const filterIsFilled = (value, elements) => {
  return value
    ? Object.keys(elements)
        .filter(key => {
          if (elements[key]) {
            if (Array.isArray(elements[key])) {
              if (elements[key].length !== 0) {
                return elements[key];
              }
            } else {
              return elements[key];
            }
          }
        })
        .reduce((r, k) => ((r[k] = elements[k]), r), {})
    : elements;
};
