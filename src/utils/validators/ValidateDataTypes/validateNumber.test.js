import { isNumeric } from './validateNumber';

it('validate if the element can be converted to a number', () => {
  const inputValue = '2';
  const expectedValue = isNumeric(inputValue);
  expect(expectedValue).toBe(true);
});
