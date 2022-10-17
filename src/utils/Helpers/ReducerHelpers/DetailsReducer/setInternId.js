import { getSeparateEntries, getStartEntries } from 'selectors/simple-selectors/results-selectors';

export const setInternId = (getState, gazName) => {
  const startEntries = getStartEntries(getState());
  const separateEntries = getSeparateEntries(getState());
  if (startEntries[gazName]) {
    return startEntries[gazName].length + separateEntries[gazName].length;
  }
  if (separateEntries[gazName]) {
    return separateEntries[gazName].length + 1;
  }
  if (!separateEntries[gazName]) {
    return 1;
  }
};
