import { validateLocations } from '../validators/PropertyValidators/validateLocations';

export const filterEntitiesWithCoordinates = entries => {
  const entitiesWithCoordinates = [];
  Object.entries(entries).forEach(([key, value]) => {
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
