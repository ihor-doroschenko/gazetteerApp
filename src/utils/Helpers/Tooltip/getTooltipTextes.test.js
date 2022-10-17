import { getTooltipTextes } from './getTooltipTextes';

it('correct tooltip on respective language', () => {
  const inputValue1 = 'tt_search';
  const inputValue2 = 'en';
  const expectedValue = getTooltipTextes(inputValue1, inputValue2);
  expect(expectedValue).toBe('Click to start the search');
});
