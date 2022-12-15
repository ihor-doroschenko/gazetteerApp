import { areIdAndGazNameNotEqual } from 'utils/EqualComparing/areIdAndGazNameNotEqual';

// Get event handlers for subtable

export const eventHandlersSubtable = params => {
  const { rowInfo, gazName, mouseOverElementInfinite, subTableEventHandlers } = params;
  const { dispatch, handleDetail, mouseOverMarkerInfinite, mouseOutMarkerInfinite } =
    subTableEventHandlers;
  return {
    onMouseOver: () => {
      const notEqual = areIdAndGazNameNotEqual({
        element: mouseOverElementInfinite,
        id: rowInfo.original.id,
        gazName,
      });
      if (rowInfo && notEqual) {
        dispatch(mouseOverMarkerInfinite({ gazName: gazName, id: rowInfo.original.id }));
      }
    },
    onMouseLeave: () => {
      dispatch(mouseOutMarkerInfinite());
    },
    onClick: () => {
      dispatch(handleDetail(gazName, rowInfo.original.id));
    },
    className: 'autoscrollClass',
  };
};
