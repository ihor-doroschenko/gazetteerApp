import { getResultsObjectForTable } from './getResultsObjectForTable';

it('the object with results data for result table is created correctly', () => {
  const inputValue1 = 'gov';
  const inputValue2 = 'text';
  const inputValue3 = 'done';
  const inputValue4 = '#00000';
  const expectedValue = getResultsObjectForTable(
    inputValue1,
    inputValue2,
    inputValue3,
    inputValue4
  );
  expect(expectedValue).toEqual({
    gazName: 'gov',
    text: 'text',
    actualState: 'done',
    color: '#00000',
    types: [],
  });
});
