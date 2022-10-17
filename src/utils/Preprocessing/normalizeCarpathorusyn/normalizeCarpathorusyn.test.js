import { normalizeCarpathorusyn } from './normalizeCarpathorusyn';

it('the entries of Carpathorusyn were correctly pre-processed', () => {
  const inputValue = [
    {
      refnum: ' ',
      name_ukrainisch: ' ',
      name_russinisch: 'Sjanok (3% Rusyn)',
      name_polnisch: 'Sanok',
    },
    {
      refnum: '102',
      name_ukrainisch: 'Dolzhytsya',
      name_russinisch: 'Dovzhycja (Sanok )',
      name_polnisch: 'Dolzyca',
    },
    {
      refnum: '121 ',
      name_ukrainisch: 'Zavoji',
      name_russinisch: 'Zavoj',
      name_polnisch: 'Zawoje (Sanok)',
    },
    {
      refnum: '125',
      name_ukrainisch: 'Zaluzh',
      name_russinisch: ' ',
      name_polnisch: 'Zaluz (Sanok dist)',
    },
    {
      refnum: '353a',
      name_ukrainisch: 'Jurivci (Sanok)',
      name_russinisch: 'Jurivci ',
      name_polnisch: 'Jurowce',
    },
    {
      refnum: '88',
      name_ukrainisch: 'Holuchkiv',
      name_russinisch: ' ',
      name_polnisch: 'Holuczkow (Sanok)',
    },
    { name_polnisch: 'Holuczkow (Sanok)' },
  ];
  const expectedValue = normalizeCarpathorusyn(inputValue);
  expect(expectedValue).toEqual([
    { id: ' ', name_ukrainisch: ' ', name: 'Sjanok (3% Rusyn)', name_polnisch: 'Sanok' },
    {
      id: '102',
      name_ukrainisch: 'Dolzhytsya',
      name: 'Dovzhycja (Sanok )',
      name_polnisch: 'Dolzyca',
    },
    { id: '121 ', name_ukrainisch: 'Zavoji', name: 'Zavoj', name_polnisch: 'Zawoje (Sanok)' },
    { id: '125', name_ukrainisch: 'Zaluzh', name: ' ', name_polnisch: 'Zaluz (Sanok dist)' },
    { id: '353a', name_ukrainisch: 'Jurivci (Sanok)', name: 'Jurivci ', name_polnisch: 'Jurowce' },
    { id: '88', name_ukrainisch: 'Holuchkiv', name: ' ', name_polnisch: 'Holuczkow (Sanok)' },
  ]);
});
