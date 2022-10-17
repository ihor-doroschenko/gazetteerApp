import { replaceKeysByIndexes } from './replaceKeysByIndexes';

it('replaces keys by indexes in an object', () => {
  const obj = { gov: false, geonames: true };
  const expectedValue = replaceKeysByIndexes(obj);
  expect(expectedValue).toStrictEqual({ 0: false, 1: true });
});
