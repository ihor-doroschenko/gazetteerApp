// Normalize the Naszekaszuby gazetteer.
// Renaming `idx` attribute to `id` attribute.
// Renaming `polish name` attribute to `name` attribute.
// Coercing value of `id` attribute to string data type.

export const normalizeNaszekaszuby = database => {
  return database
    .filter(item => item.idx || item['polish name'])
    .map(item => {
      let { idx: id, ['polish name']: name, ...rest } = item;
      id = id.toString();
      return { id, name, ...rest };
    });
};
