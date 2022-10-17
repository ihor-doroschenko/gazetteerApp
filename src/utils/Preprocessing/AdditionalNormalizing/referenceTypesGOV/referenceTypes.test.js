import { referenceTypes } from './referenceTypes';

it('validate if correct error text was produced', () => {
  const inputValue = [
    { value: '39', 'end-year': 1933 },
    { value: '54', 'begin-year': 1933 },
  ];
  const expectedValue = referenceTypes(inputValue);
  expect(expectedValue).toEqual([
    { type: 'Ort', typeGroup: 'Wohnplatz', 'end-year': 1933 },
    { type: 'Stadtteil', typeGroup: 'Wohnplatz', 'begin-year': 1933 },
  ]);
});
