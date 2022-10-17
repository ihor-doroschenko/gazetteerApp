import { getDetailsObject } from './getDetailsObject';

it('the detail object is created correctly', () => {
  const inputValue1 = 'gov';
  const inputValue2 = { id: '12345', name: 'Gdansk' };
  const expectedValue = getDetailsObject(inputValue1, inputValue2);
  expect(expectedValue).toEqual({
    details: { id: '12345', name: 'Gdansk' },
    gazName: 'gov',
    isFilled: false,
    status: false,
    isEssential: false,
  });
});
