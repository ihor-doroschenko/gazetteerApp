import { getRequestErrorText } from './getRequestErrorText';

it('validate if correct error text was produced', () => {
  const inputValue = { statusText: 'error occured', status: '404' };
  const expectedValue = getRequestErrorText(inputValue);
  expect(expectedValue).toBe('error occured (code 404)');
});
