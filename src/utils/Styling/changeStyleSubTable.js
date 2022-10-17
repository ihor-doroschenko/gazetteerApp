import { ifBothIdAndGazNameAreNotEqual } from 'utils/EqualComparing/ifBothIdAndGazNameAreNotEqual';

export const changeStyleSubTable = (
  rowInfo,
  gazName,
  mouseOverElementInfinite,
  subTableEventHandlers
) => {
  const { dispatch, handleDetail, mouseOverInfinite, mouseOutInfinite } = subTableEventHandlers;
  return {
    onMouseOver: () => {
      if (
        rowInfo &&
        ifBothIdAndGazNameAreNotEqual({
          element: mouseOverElementInfinite,
          id: rowInfo.original.id,
          gazName,
        })
      ) {
        dispatch(mouseOverInfinite({ gazName: gazName, id: rowInfo.original.id }));
      }
    },
    onMouseLeave: () => {
      dispatch(mouseOutInfinite());
    },
    onClick: () => {
      dispatch(handleDetail(gazName, rowInfo.original.id));
    },
    className: 'autoscrollClass',
  };
};
