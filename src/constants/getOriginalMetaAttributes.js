export const getOriginalMetaAttributes = (attribute, gazName) => {
  const original = originalMetaAttributes[attribute]
    ? originalMetaAttributes[attribute][gazName]
    : attribute;
  return original || attribute;
};
const originalMetaAttributes = {
  id: {
    geonames: 'geonameId',
    gnd: 'gndIdentifier',
    prng: 'id',
    naszekaszuby: 'idx',
    poland16thc: 'objectid',
    carpathorusyn: 'refnum',
    prusijalit: 'idx',
  },
  name: {
    gnd: 'preferredName',
    gov: 'name',
    wikidata: ' ',
    prng: 'main name',
    naszekaszuby: 'polish name',
    poland16thc: 'current name',
    carpathorusyn: 'rusyn name',
    prusijalit: 'lithuanian name',
  },
  'variant names': {
    geonames: 'alternateNames',
    gov: ' ',
    gnd: 'variantName',
    wikidata: 'names',
    prng: 'historical name',
    histonamen: 'chron',
    naszekaszuby: 'kashubian name',
    poland16thc: '16th c. name',
    carpathorusyn: ['ukrainian name', 'cur. polish name'],
    prusijalit: ['german name', 'russian/polish name', 'russian name', 'polish name'],
  },
  type: {
    geonames: ['fclName', 'fcode', 'fcodeName'],
    prng: ['object type', 'object class'],
    poland16thc: 'settlement type',
    wikidata: 'types',
  },
  position: {
    geonames: ['lat', 'lng'],
    wikidata: 'coordinates',
    gov: 'position',
    gnd: 'hasGeometry',
    prng: ['lat', 'lon'],
    poland16thc: ['lat', 'lon'],
    prusijalit: ['lat', 'lon'],
  },
  link: { gov: 'link', gnd: 'link' },
};
