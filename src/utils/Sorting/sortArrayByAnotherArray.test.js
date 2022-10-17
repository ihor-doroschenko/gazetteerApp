import { sortArrayByAnotherArray } from './sortArrayByAnotherArray';

it('should sort one array by order of the other', () => {
  const itemsArray = ['gov', 'geonames', 'gnd', 'prng', 'bkg'];
  const sortingArr = ['gnd', 'bkg', 'gov', 'prng', 'geonames'];
  const expectedValue = sortArrayByAnotherArray(itemsArray, sortingArr);
  expect(JSON.stringify(expectedValue)).toBe(
    JSON.stringify(['gnd', 'bkg', 'gov', 'prng', 'geonames'])
  );
});
