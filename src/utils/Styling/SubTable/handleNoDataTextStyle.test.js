import { handleNoDataTextStyle } from './handleNoDataTextStyle';

it('validate valide class combination', () => {
  const expectedValue = handleNoDataTextStyle();
  expect(expectedValue).toStrictEqual({
    style: {
      top: '50%',
      padding: '10px',
    },
  });
});
