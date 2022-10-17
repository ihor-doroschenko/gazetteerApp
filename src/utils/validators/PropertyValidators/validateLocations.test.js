import { validateLocations } from './validateLocations';

it('element has numeric both lat and lng', () => {
  let inputValue = [13, 45];
  const expectedValue = validateLocations(inputValue);
  expect(expectedValue).toBe(true);
});
