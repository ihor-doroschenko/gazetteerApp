import { validateDatabasesInput } from './validateDatabasesInput';

it('text includes only latin letters', () => {
  const inputValue = [{ gazName: 'gov' }];
  const expectedValue = validateDatabasesInput(inputValue);
  expect(expectedValue).toBe(false);
});
