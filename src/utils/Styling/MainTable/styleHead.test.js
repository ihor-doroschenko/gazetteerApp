import { styleHead } from './styleHead';

it('validate if it returns an object with a style where display is none', () => {
  const expectedValue = styleHead();
  expect(expectedValue).toStrictEqual({
    style: {
      display: 'none',
    },
  });
});
