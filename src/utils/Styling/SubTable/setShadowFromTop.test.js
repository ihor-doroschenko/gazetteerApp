import { setShadowFromTop } from './setShadowFromTop';

it('validate valide class combination', () => {
  const expectedValue = setShadowFromTop();
  expect(expectedValue).toStrictEqual({
    style: {
      boxShadow: 'rgba(0, 0, 0, 0.3) 0px 15px 10px -15px inset',
    },
  });
});
