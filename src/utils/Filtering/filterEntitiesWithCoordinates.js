import { validateLocations } from '../validators/PropertyValidators/validateLocations';

// Filter entities of a gazetteer that have valid coordinates

export const filterEntitiesWithCoordinates = entities => {
  const entitiesWithCoordinates = [];
  Object.entries(entities).forEach(([key, value]) => {
    if (value && value.length !== 0) {
      for (let element of value) {
        if (typeof element === 'object') {
          if (validateLocations(element)) {
            entitiesWithCoordinates.push({ entity: element, gazName: key });
          }
        }
      }
    }
  });
  return entitiesWithCoordinates;
};
