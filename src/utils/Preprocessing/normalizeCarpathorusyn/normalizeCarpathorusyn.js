// Normalize the Carpathorusyn gazetteer.

// Renaming "rusyn name" attribute to "name" attribute.
// Renaming "refnum" attribute to "id" attribute.

export const normalizeCarpathorusyn = database => {
  return database
    .filter(item => item.refnum || item['rusyn name'])
    .map(item => {
      const { refnum: id, ['rusyn name']: name, ...rest } = item;
      return { id, name, ...rest };
    });
};
