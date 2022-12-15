import { areIdAndGazNameEqual } from 'utils/EqualComparing/areIdAndGazNameEqual';

// Change color of the row if it gets moused (both directions - from table to the map (mouse over the row) and fro mthe map to the table (mouse over the marker on the map))

export const getMousedColorForRow = params => {
  const { rowInfo, gazName, mouseOverElementInfinite, mouseOverElement } = params;
  if (rowInfo) {
    const { original } = rowInfo;
    const { id } = original;
    const areEqual =
      areIdAndGazNameEqual(id, gazName, mouseOverElement) ||
      areIdAndGazNameEqual(id, gazName, mouseOverElementInfinite);
    if (areEqual) {
      return {
        style: {
          backgroundColor: 'rgba(254,196,79, 0.3)',
        },
      };
    }
  }
};
