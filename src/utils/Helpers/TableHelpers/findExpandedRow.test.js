import { findExpandedRow } from './findExpandedRow';

it('returns true if requested gazetteer has value true', () => {
  const inputValue1 = { gov: false, geonames: true };
  const inputValue2 = 'gov';
  const expectedValue = findExpandedRow(inputValue1, inputValue2);
  expect(expectedValue).toBe(false);
});
