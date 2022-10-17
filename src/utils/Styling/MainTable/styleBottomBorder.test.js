import { styleBottomBorder } from './styleBottomBorder';

it('validate if it returns a borderBottom className', () => {
  const inputValue1 = 5;
  const inputValue2 = 6;
  const expectedValue = styleBottomBorder(inputValue1, inputValue2);
  expect(expectedValue).toStrictEqual({
    className: '',
  });
});
