import { getAbstractMetaAttributes } from 'constants/getAbstractMetaAttributes';

// Filter data for details view and return only those attributes that are essential (see getAbstractMetaAttributes function)

export const filterIsEssential = (value, elements) => {
  const abstractMetaAttributes = getAbstractMetaAttributes();
  return value
    ? Object.keys(elements)
        .filter(item => abstractMetaAttributes.includes(item))
        .reduce((r, k) => ((r[k] = elements[k]), r), {})
    : elements;
};
