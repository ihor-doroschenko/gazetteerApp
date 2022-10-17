// In some gazetteers the attribute names can be in Polish

export const normalizeNaszekaszuby = database => {
  return database
    .filter(item => item.idx || item['polish name'])
    .map(item => {
      let { idx: id, ['polish name']: name, ...rest } = item;
      id = id.toString();
      return { id, name, ...rest };
    });
};
