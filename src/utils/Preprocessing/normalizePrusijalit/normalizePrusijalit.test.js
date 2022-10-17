import { normalizePrusijalit } from './normalizePrusijalit';

it('the entries of Prusijalit were correctly pre-processed', () => {
  const inputValue = [
    {
      name_litauisch: 'Karaliaučius',
      name_deutsch: 'Königsberg',
      name_russisch_polnisch: 'rus. Kaliningrad(Калининград)',
      verwaltungseinheit1: 'Karaliaučiaus',
      verwaltungseinheit2: 'Karaliaučiaus miestas',
      koordinaten: '54.70641, 20.51205',
      idx: 95,
      lat: '54.70641',
      lon: '20.51205',
      name_russisch: 'Kaliningrad(Калининград)',
      name_polnisch: null,
    },
    { lon: '20.51205', name_deutsch: 'Gdóńsk' },
  ];
  const expectedValue = normalizePrusijalit(inputValue);
  expect(expectedValue).toEqual([
    {
      name: 'Karaliaučius',
      name_deutsch: 'Königsberg',
      name_russisch_polnisch: 'rus. Kaliningrad(Калининград)',
      verwaltungseinheit1: 'Karaliaučiaus',
      verwaltungseinheit2: 'Karaliaučiaus miestas',
      koordinaten: '54.70641, 20.51205',
      id: '95',
      lat: '54.70641',
      lng: '20.51205',
      name_russisch: 'Kaliningrad(Калининград)',
      name_polnisch: null,
    },
  ]);
});
