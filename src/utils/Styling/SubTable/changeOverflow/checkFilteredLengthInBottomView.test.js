import { checkFilteredLengthInBottomView } from './checkFilteredLengthInBottomView';

it('validate if it returns true if the length of filtered results is less than length of visible results in bottom view', () => {
  const inputValue1 = [1, 2, 3];
  const inputValue2 = [{ type: 'name' }, { value: 'w' }];
  const inputValue3 = 3;
  const expectedValue = checkFilteredLengthInBottomView(inputValue1, inputValue2, inputValue3);
  expect(expectedValue).toBe(true);
});
