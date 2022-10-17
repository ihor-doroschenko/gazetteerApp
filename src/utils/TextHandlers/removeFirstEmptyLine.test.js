import { removeFirstEmptyLine } from './removeFirstEmptyLine';

it('it removes the first element of array', () => {
  const inputValue = ['\n', 'header:', 'value'];
  removeFirstEmptyLine(inputValue);
  expect(inputValue).toEqual(['header:', 'value']);
});
