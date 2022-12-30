// If gazetteer name is available, get value whether this gazetteer is in the data

export const shouldThisGazBeFiltered = (data, gazName) => {
  if (gazName) {
    return data.some(el => el.gazetteer === gazName);
  }
  return false;
};
