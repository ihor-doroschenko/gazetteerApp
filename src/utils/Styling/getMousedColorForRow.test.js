import { getMousedColorForRow } from './getMousedColorForRow';

it('validate if a row receives a signal color if moused', () => {
  const rowInfo = {
    original: {
      id: '12345',
    },
  };
  const gazName = 'gnd';
  const mouseOverElement = { id: '12345', gazName: 'gnd' };
  const expectedValue = getMousedColorForRow(rowInfo, gazName, mouseOverElement);
  expect(expectedValue).toStrictEqual({
    style: {
      backgroundColor: 'rgba(254,196,79, 0.3)',
    },
  });
});
