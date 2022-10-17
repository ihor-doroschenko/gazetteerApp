const { getResultsTableSideMaxHeight } = require('./getResultsTableSideMaxHeight');
const { getTopValueSideContainer } = require('./getTopValueSideContainer');

it('validate if the value for maxHeight for SideView is correct', () => {
  const isMatching = undefined;
  const expectedValue = getResultsTableSideMaxHeight(isMatching);
  expect(expectedValue).toBe(`calc(95vh - 45px)`);
});
