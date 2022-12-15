import { checkLengthBottomView } from './checkLengthBottomView';

it('validate if it returns true if one of the lengths is less than length of visible results in bottom view', () => {
  const inputValue1 = true;
  const inputValue2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const inputValue3 = [{ type: 'name' }, { value: 'w' }];
  const inputValue4 = [1, 2];
  const expectedValue = checkLengthBottomView(inputValue1, inputValue2, inputValue3, inputValue4);
  expect(expectedValue).toBe(true);
});
