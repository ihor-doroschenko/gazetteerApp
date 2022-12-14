// Filter matchings by source gazetteer name matchings were matched to

export function filterMatchingsBySourceGazetteer(matchings, currentSourceGazetteer) {
  return (
    Object.keys(matchings)
      .filter(key => (currentSourceGazetteer !== 'all' ? key === currentSourceGazetteer : key))
      // eslint-disable-next-line no-sequences
      .reduce((res, key) => ((res[key] = matchings[key]), res), {})
  );
}
