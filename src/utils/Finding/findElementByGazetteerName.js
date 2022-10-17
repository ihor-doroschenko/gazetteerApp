export const findElementByGazetteerName = (data, gazName) => {
  return data.find(el => el.gazetteer === gazName);
};
