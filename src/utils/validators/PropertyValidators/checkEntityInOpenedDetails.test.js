import { checkEntityInOpenedDetails } from './checkEntityInOpenedDetails';

it('check by id if the entity is already in the array', () => {
  const inputValue1 = [{ details: { id: '1234' } }, { details: { id: '5555' } }];
  const inputValue2 = '5555';
  const expectedValue = checkEntityInOpenedDetails(inputValue1, inputValue2);
  expect(expectedValue).toBe(true);
});
