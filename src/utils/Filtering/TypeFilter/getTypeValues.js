import { getComplexTypeValues } from './getComplexTypeValues';
import { getStandardTypeValues } from './getStandardTypeValues';

export const getTypeValues = (newSet, gazName, type) => {
  if (gazName === 'geonames' || gazName === 'prng' || gazName === 'poland16thc') {
    return getStandardTypeValues(newSet, type);
  } else if (gazName === 'gov' || gazName === 'wikidata' || gazName === 'gnd') {
    return getComplexTypeValues(newSet, type);
  }
};
