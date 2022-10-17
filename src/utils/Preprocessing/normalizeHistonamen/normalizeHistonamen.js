export const normalizeHistonamen = database => {
  return database
    .filter(item => item.id || item.name)
    .map(item => {
      let { id, chron: names, ...rest } = item;
      id = id.toString();
      return { id, names, ...rest };
    });
};
