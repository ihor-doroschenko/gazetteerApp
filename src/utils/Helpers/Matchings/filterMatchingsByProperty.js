export const filterMatchingsByProperty = (matchings, value, property) => {
  const clonedMatchings = JSON.parse(JSON.stringify(matchings));
  const filtered = {};
  for (let key of Object.keys(clonedMatchings)) {
    filtered[key] = [];
    for (let el of clonedMatchings[key]) {
      if (value !== 'all') {
        let newM = el.matchings.filter(m => m[property] === value);
        if (newM.length !== 0) {
          el.matchings = newM;
          filtered[key].push(el);
        }
      } else {
        filtered[key].push(el);
      }
    }
  }
  return filtered;
};
