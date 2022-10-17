import { addNoShadow } from './addNoShadow';

it('validate valide class combination', () => {
  const inputValue1 = 'ComponentClasses';
  const inputValue2 = false;
  const expectedValue = addNoShadow(inputValue1, inputValue2);
  expect(expectedValue).toBe('ComponentClasses noShadow');
});
