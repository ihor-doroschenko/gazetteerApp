import { makeValueHeadersItalic } from './makeValueHeadersItalic';

it('validate if the value headers get strong tags', () => {
  const inputValue = ['header:', 'value'];
  const expectedValue = makeValueHeadersItalic(inputValue);
  expect(expectedValue).toBe(`<em>header: </em>value`);
});
