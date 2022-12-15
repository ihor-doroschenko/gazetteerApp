// Add to each entity in the results new property "internId" to produce a numberic list for current gazetteer specific results

export const assignInternId = data => {
  for (let i = 0; i < data.length; i++) {
    data[i].internId = i + 1;
  }
  return data;
};
