import { filterDetailsByGazName } from './filterDetailsByGazName';

it('filter details by gazetteer name', () => {
  const inputValue1 = [
    { gazName: 'gov', details: { id: 1 } },
    { gazName: 'geonames', details: { id: 2 } },
  ];
  const inputValue2 = 'gov';
  const expectedValue = filterDetailsByGazName(inputValue1, inputValue2);
  expect(expectedValue).toStrictEqual([{ gazName: 'gov', details: { id: 1 } }]);
});
