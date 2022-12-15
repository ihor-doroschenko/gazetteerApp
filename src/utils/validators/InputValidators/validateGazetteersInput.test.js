import { validateGazetteersInput } from './validateGazetteersInput';

it('text includes only latin letters', () => {
  const inputValue = [{ gazName: 'gov' }];
  const expectedValue = validateGazetteersInput(inputValue);
  expect(expectedValue).toBe(false);
});
