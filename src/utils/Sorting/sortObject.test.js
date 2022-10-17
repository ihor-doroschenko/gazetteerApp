import { sortObject } from './sortObject';

it('object properties get alphabetically sorted', () => {
  const inputValue = { position: [2, 3], gazName: 'gov', name: 'Gdansk' };
  const expectedValue = sortObject(inputValue);
  expect(JSON.stringify(expectedValue)).toBe(
    JSON.stringify({ gazName: 'gov', name: 'Gdansk', position: [2, 3] })
  );
});
