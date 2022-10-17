export const assignInternId = data => {
  for (let i = 0; i < data.length; i++) {
    data[i].internId = i + 1;
  }
  return data;
};
