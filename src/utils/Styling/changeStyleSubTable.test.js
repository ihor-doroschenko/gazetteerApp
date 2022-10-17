import { changeStyleSubTable } from './changeStyleSubTable';

it('validate if a row receives a signal color if moused', () => {
  const id = '12345';
  const gazName = 'gnd';
  const mouseOverElement = { id: '12345', gazName: 'gnd' };
  const subTableStylesData = {
    dispatch: func => func(),
    handleDetail: () => {},
    mouseOut: () => {},
    mouseOver: () => {},
  };
  const expectedValue = changeStyleSubTable(id, gazName, mouseOverElement, subTableStylesData);
  expect(JSON.stringify(expectedValue)).toBe(
    JSON.stringify({
      onMouseOver: () => {
        dispatch(mouseOver({ gazName: 'gnd', id: '12345' }));
      },
      onMouseLeave: () => {
        dispatch(mouseOut());
      },
      onClick: () => {
        dispatch(handleDetail('gnd', '12345'));
      },
      className: 'autoscrollClass',
    })
  );
});
