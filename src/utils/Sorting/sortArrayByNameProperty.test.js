import { sortArrayByNameProperty } from './sortArrayByNameProperty';

it('object properties get alphabetically sorted', () => {
  const inputValue = [
    { gazName: 'gov', name: 'Gdansk' },
    { gazName: 'gov', name: 'Danzig' },
    { gazName: 'gov', name: 'Dantzik' },
  ];
  const expectedValue = inputValue.sort(sortArrayByNameProperty);
  expect(JSON.stringify(expectedValue)).toBe(
    JSON.stringify([
      { gazName: 'gov', name: 'Dantzik' },
      { gazName: 'gov', name: 'Danzig' },
      { gazName: 'gov', name: 'Gdansk' },
    ])
  );
});
