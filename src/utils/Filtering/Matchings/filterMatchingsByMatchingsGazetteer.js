import cloneDeep from 'lodash.clonedeep';

// Filter matchings by gazetteer name of a matching themselves

export const filterMatchingsByMatchingsGazetteer = (matchings, value, property) => {
  const clonedMatchings = cloneDeep(matchings);
  const filteredMatchings = {};
  for (let key of Object.keys(clonedMatchings)) {
    filteredMatchings[key] = [];
    for (let el of clonedMatchings[key]) {
      if (value !== 'all') {
        let filteredElement = el.matchings.filter(m => m[property] === value);
        if (filteredElement.length !== 0) {
          el.matchings = filteredElement;
          filteredMatchings[key].push(el);
        }
      } else {
        filteredMatchings[key].push(el);
      }
    }
  }
  return filteredMatchings;
};
