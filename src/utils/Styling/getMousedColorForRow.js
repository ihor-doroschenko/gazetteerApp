import { ifBothIdAndGazNameAreEqual } from 'utils/EqualComparing/ifBothIdAndGazNameAreEqual';

export const getMousedColorForRow = (
  rowInfo,
  gazName,
  mouseOverElementInfinite,
  mouseOverElement
) => {
  if (
    (rowInfo && ifBothIdAndGazNameAreEqual(rowInfo.original.id, gazName, mouseOverElement)) ||
    (rowInfo && ifBothIdAndGazNameAreEqual(rowInfo.original.id, gazName, mouseOverElementInfinite))
  ) {
    return {
      style: {
        backgroundColor: 'rgba(254,196,79, 0.3)',
      },
    };
  }
};
