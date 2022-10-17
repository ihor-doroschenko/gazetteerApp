export const filterCaseInsensitive = (value, row) => {
  return row.name !== undefined
    ? String(row.name.toString().toLowerCase()).includes(value.toString().toLowerCase())
    : true;
};
