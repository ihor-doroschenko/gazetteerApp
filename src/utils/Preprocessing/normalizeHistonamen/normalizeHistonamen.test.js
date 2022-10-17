import { normalizeHistonamen } from './normalizeHistonamen';

it('the entries of histonamen were correctly pre-processed', () => {
  const inputValue = [
    {
      id: 43605,
      name: 'Gdingen',
      blatt: '06.0',
      netz: '06L',
      chron: [
        { name: 'Gdingen', zeit: 'VV (nach Versailles)', staat: 'Polen', admin: 'Wejherowo' },
        {
          name: 'Gotenhafen',
          zeit: '1939',
          staat: 'Deutsches Reich',
          admin: 'Gotenhafen/Gdingen (St.Kr.)',
        },
        { name: 'Gdynia', zeit: '1945', staat: 'Polen', admin: 'Gdynia m.' },
        { name: 'Gdynia', zeit: '1992', staat: 'Polen', admin: 'Gdańsk' },
      ],
    },
  ];
  const expectedValue = normalizeHistonamen(inputValue);
  expect(expectedValue).toEqual([
    {
      id: '43605',
      name: 'Gdingen',
      blatt: '06.0',
      netz: '06L',
      names: [
        { name: 'Gdingen', zeit: 'VV (nach Versailles)', staat: 'Polen', admin: 'Wejherowo' },
        {
          name: 'Gotenhafen',
          zeit: '1939',
          staat: 'Deutsches Reich',
          admin: 'Gotenhafen/Gdingen (St.Kr.)',
        },
        { name: 'Gdynia', zeit: '1945', staat: 'Polen', admin: 'Gdynia m.' },
        { name: 'Gdynia', zeit: '1992', staat: 'Polen', admin: 'Gdańsk' },
      ],
    },
  ]);
});
