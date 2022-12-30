import { getEssentialAttributes } from 'constants/getEssentialAttributes';

// Filter data for details view and return only those attributes that are essential (see getEssentialAttributes function)

export const filterIsEssential = (value, elements) => {
  const abstractMetaAttributes = getEssentialAttributes();
  return value
    ? Object.keys(elements)
        .filter(item => abstractMetaAttributes.includes(item))
        .reduce((r, k) => ((r[k] = elements[k]), r), {})
    : elements;
};
