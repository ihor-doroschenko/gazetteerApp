// Get headers to export data from the matchings view

export const getHeadersForMatchingExport = () => {
  return [
    'GazetteerNameOfOriginalEntity',
    'idOfOriginalEntity',
    'nameOfOriginalEntity',
    'gazetteerNameOfMatchedEntity',
    'idOfMatchedEntity',
    'typeOfMatchedEntity',
    'descriptionOfMatchedEntity',
    'linkOfMatchedEntity',
  ];
};
