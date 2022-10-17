export const checkGazetteer = (data, gazName) => {
  if (gazName) {
    return data.some(el => el.gazetteer === gazName);
  }
  return false;
};
