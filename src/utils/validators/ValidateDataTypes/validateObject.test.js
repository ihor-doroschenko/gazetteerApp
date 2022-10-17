import { isObject } from './validateObject';

it('validate if the element is an object and not an array or null', () => {
  const inputValue = [];
  const expectedValue = isObject(inputValue);
  expect(expectedValue).toBe(false);
});
