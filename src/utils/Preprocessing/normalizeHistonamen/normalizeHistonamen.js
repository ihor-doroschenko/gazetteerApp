// Normalize the Histonamen gazetteer.
// Coercing value of `id` attribute to string data type.
// Renaming of `chron` attribute to `names` attribute.

export const normalizeHistonamen = database => {
  return database
    .filter(item => item.id || item.name)
    .map(item => {
      let { id, chron: names, ...rest } = item;
      id = id.toString();
      return { id, names, ...rest };
    });
};
