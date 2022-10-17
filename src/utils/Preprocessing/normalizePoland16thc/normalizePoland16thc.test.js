import { normalizePoland16thc } from './normalizePoland16thc';

it('the entries of PRNG were correctly pre-processed', () => {
  const inputValue = [
    {
      objectid: 2285,
      nazwa_wspolczesna: 'Gdańsk',
      nazwa_16w: 'Gdańsk',
      charakter_osady: 'miasto',
      rodzaj_wlasnosci: 'k',
      parafia: null,
      powiat: 'gdn',
      wojewodztwo: 'pmr',
      funkcje_centralne_panstwowe: null,
      funkcje_centralne_koscielne: null,
      prng: 33828,
      lat: '54.3501606631773',
      lon: '18.6532382178363',
    },
    { prng: 33828, lat: '54.3501606631773', lon: '18.6532382178363' },
  ];
  const expectedValue = normalizePoland16thc(inputValue);
  expect(expectedValue).toEqual([
    {
      id: '2285',
      name: 'Gdańsk',
      nazwa_16w: 'Gdańsk',
      type: 'miasto',
      rodzaj_wlasnosci: 'k',
      parafia: '',
      powiat: 'gdn',
      wojewodztwo: 'pmr',
      funkcje_centralne_panstwowe: '',
      funkcje_centralne_koscielne: '',
      prng: 33828,
      lat: '54.3501606631773',
      lng: '18.6532382178363',
    },
  ]);
});
