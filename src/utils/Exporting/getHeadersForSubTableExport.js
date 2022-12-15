// Get headers to export data from the subtable (gazetteer specific) view

export const getHeadersForSubTableExport = () => {
  return [
    { label: 'ID', key: 'id' },
    { label: 'Record name', key: 'name' },
    { label: 'Type', key: 'type' },
  ];
};
