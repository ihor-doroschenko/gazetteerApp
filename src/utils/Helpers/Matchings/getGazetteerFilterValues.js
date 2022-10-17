export const getGazetteerFilterValues = values => {
  const obj = { all: 'all gazetteers' };
  for (const key of values) {
    obj[key] = key;
  }
  return obj;
};
