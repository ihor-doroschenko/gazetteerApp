const { getTopValueSideContainer } = require('./getTopValueSideContainer');

it('validate if it returns a validate top margin value', () => {
  const isMatching = true;
  const isMatchingTableHidden = true;
  const isResultsHidden = false;
  const expectedValue = getTopValueSideContainer(
    isMatching,
    isMatchingTableHidden,
    isResultsHidden
  );
  expect(expectedValue).toBe(100);
});
