import { checkEntriesLengthInBottomView } from './checkEntriesLengthInBottomView';

it('validate if it returns true if the length of the results is less than length of visible results in bottom view', () => {
  const inputValue1 = [1, 2];
  const inputValue2 = 3;
  const expectedValue = checkEntriesLengthInBottomView(inputValue1.length, inputValue2);
  expect(expectedValue).toBe(true);
});
