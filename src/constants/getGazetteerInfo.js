// Get additional parameters for a gazetteer representation

export const getGazetteerInfo = gazName => {
  return gazetteerInfo[gazName];
};
export const gazetteerInfo = {
  geonames: {
    id: 1,
    gazName: 'geonames',
    text: 'GeoNames.org',
    link: 'http://geonames.org',
    color: '#a0a0a0',
    value: true,
  },
  gov: {
    id: 2,
    gazName: 'gov',
    text: 'Geschichtliches Ortsverzeichnis (GOV)',
    link: 'http://gov.genealogy.net',
    color: '#33a02c',
    value: true,
  },
  gnd: {
    id: 3,
    gazName: 'gnd',
    text: 'Gemeinsame Normdatei (GND)',
    link: 'https://dnb.de',
    color: '#8756bc',
    value: true,
  },
  wikidata: {
    id: 4,
    gazName: 'wikidata',
    text: 'Wikidata',
    link: 'https://www.wikidata.org',
    color: '#cab2d6',
    value: true,
  },
  prng: {
    id: 5,
    gazName: 'prng',
    text: 'National Geographical Names Register (PRNG)',
    link: 'http://gugik.gov.pl',
    color: '#ff7f00',
    value: true,
  },
  histonamen: {
    id: 6,
    gazName: 'histonamen',
    text: 'BKG Historische Ortsnamen',
    link: 'https://gdz.bkg.bund.de/index.php/default/historische-ortsnamen.html',
    color: '#fdbf6f',
    value: true,
  },
  poland16thc: {
    id: 7,
    gazName: 'poland16thc',
    text: 'Historical Atlas of Poland, 16th Century',
    link: 'https://ontohgis.pl/przykladowa-strona/ontohgis/',
    color: '#e31a1c',
    value: true,
  },
  naszekaszuby: {
    id: 8,
    gazName: 'naszekaszuby',
    text: 'Naszekaszuby',
    link: 'http://naszekaszuby.pl',
    color: '#fb9a99',
    value: true,
  },
  carpathorusyn: {
    id: 9,
    gazName: 'carpathorusyn',
    text: 'Carpathorusyn',
    link: 'http://carpatho-rusyn.org',
    color: '#ffff99',
    value: true,
  },
  prusijalit: {
    id: 10,
    gazName: 'prusijalit',
    text: 'Interaktyvus Rytų Prūsijos žemėlapis IV (Prusijalit)',
    link: 'http://prusija.lki.lt',
    color: '#b2df8a',
    value: true,
  },
};
