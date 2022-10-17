export const isEntryInSeparatedEntries = (element, separateEntries) => {
  return (
    separateEntries[element.gazName] && separateEntries[element.gazName].some(el => element.id)
  );
};
