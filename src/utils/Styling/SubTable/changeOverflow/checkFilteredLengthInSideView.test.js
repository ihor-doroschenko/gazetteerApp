import { checkFilteredLengthInSideView } from './checkFilteredLengthInSideView';

it('validate if it returns true if the length of filtered results is less than length of visible results in side view', () => {
  const inputValue1 = false;
  const inputValue2 = [1, 2];
  const inputValue3 = 3;
  const inputValue4 = [];
  const expectedValue = checkFilteredLengthInSideView(
    inputValue1,
    inputValue2,
    inputValue3,
    inputValue4
  );
  expect(expectedValue).toBe(false);
});
