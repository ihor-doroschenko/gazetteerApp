import { validateStatus } from './validateStatus';

it('object has no isFetching, has elements and has minimum one done', () => {
  let inputValue = { gov: 'noData' };
  const expectedValue = validateStatus(inputValue);
  expect(expectedValue).toBe(true);
});
