import { changeOverflow } from './changeOverflow';

it('validate if overflow is set to hidden or to auto', () => {
  const inputValue1 = false;
  const inputValue2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const inputValue3 = [1, 2, 3, 4, 5, 6, 7];
  const inputValue4 = [];
  const expectedValue = changeOverflow(inputValue1, inputValue2, inputValue3, inputValue4);
  expect(expectedValue).toStrictEqual({
    style: {
      overflow: 'auto',
    },
  });
});
