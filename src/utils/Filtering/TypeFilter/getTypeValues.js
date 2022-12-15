import { getComplexTypeValues } from './getComplexTypeValues';
import { getStandardTypeValues } from './getStandardTypeValues';

// Get all possible type values for setting them into a filter to filter entities of a gazetteer by type (in subtable). Not every gazetteer has types. Some gazetteers that do have, have types of string data format (standard), while the other have more complex data types

export const getTypeValues = (newSet, gazName, type) => {
  if (gazName === 'geonames' || gazName === 'prng' || gazName === 'poland16thc') {
    return getStandardTypeValues(newSet, type);
  } else if (gazName === 'gov' || gazName === 'wikidata' || gazName === 'gnd') {
    return getComplexTypeValues(newSet, type);
  }
};
