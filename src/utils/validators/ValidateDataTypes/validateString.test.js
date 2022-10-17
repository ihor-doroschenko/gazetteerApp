import { validateString } from './validateString';

it('validate if the element is string', () => {
  const inputValue = ' ';
  const expectedValue = validateString(inputValue);
  expect(expectedValue).toBe(true);
});
