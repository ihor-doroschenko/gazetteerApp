import { markSortableColumns } from './markSortableColumns';

it('validate valide class combination', () => {
  const inputValue = true;
  const expectedValue = markSortableColumns(inputValue);
  expect(expectedValue).toStrictEqual({
    className: 'sort',
  });
});
