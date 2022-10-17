// In some gazetteers the attribute names can be in German

export const normalizeCarpathorusyn = database => {
  return database
    .filter(item => item.refnum || item['rusyn name'])
    .map(item => {
      const { refnum: id, ['rusyn name']: name, ...rest } = item;
      return { id, name, ...rest };
    });
};
