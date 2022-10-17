import { getResultsLength } from './getResultsLength';

it('returns the length of the gazetteer result if the fetching is over and if it is not over, it should return "...is Loading"', () => {
  const original = { types: [1, 2, 3], actualState: 'noData' };
  const expectedValue = getResultsLength(original);
  expect(expectedValue).toBe('0');
});
