import { getMinRows } from './getMinRows';

it('checks if empty rows should be added', () => {
  const isSideSwitched = false;
  const length = 0;
  const expectedValue = getMinRows(isSideSwitched, length);
  expect(expectedValue).toBe(4);
});
