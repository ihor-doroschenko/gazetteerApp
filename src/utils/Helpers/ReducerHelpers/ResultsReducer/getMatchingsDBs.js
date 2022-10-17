export const getMatchingsDBs = matchings => {
  const dbs = new Set();
  for (let matchedElement of matchings) {
    for (let matching of matchedElement) {
      dbs.add(matching.db);
    }
  }
  return dbs;
};
