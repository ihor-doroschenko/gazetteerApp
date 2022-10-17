import { getAbstractMetaAttributes } from 'constants/getAbstractMetaAttributes';

export const filterIsEssential = (value, elements) => {
  const abstractMetaAttributes = getAbstractMetaAttributes();
  return value
    ? Object.keys(elements)
        .filter(item => abstractMetaAttributes.includes(item))
        .reduce((r, k) => ((r[k] = elements[k]), r), {})
    : elements;
};
