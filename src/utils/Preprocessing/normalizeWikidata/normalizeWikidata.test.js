import { normalizeWikidata } from './normalizeWikidata';

it('the entries of Prusijalit were correctly pre-processed', () => {
  const inputValue = [
    {
      id: 'Q100734675',
      names: [
        { name: 'Hungarian consulate general, Gdansk', lang: 'en' },
        { name: 'Konsulat Generalny Węgier w Gdansku', lang: 'pl' },
      ],
      coordinates: [{ lat: '54.359861111', lon: '18.649361111' }],
      types: [{ name: 'consulate general' }],
      matchings: [],
      link: 'https://www.wikidata.org/wiki/Q100734675',
    },
  ];
  const expectedValue = normalizeWikidata(inputValue);
  expect(expectedValue).toEqual([
    {
      id: 'Q100734675',
      name: 'Hungarian consulate general, Gdansk',
      names: [
        { name: 'Hungarian consulate general, Gdansk', lang: 'en' },
        { name: 'Konsulat Generalny Węgier w Gdansku', lang: 'pl' },
      ],
      lat: '54.359861111',
      lng: '18.649361111',
      type: [{ type: 'consulate general' }],
      matchings: [],
      link: 'https://www.wikidata.org/wiki/Q100734675',
    },
  ]);
});
