import { convertArrayItemsToNumbers } from 'utils/Converting/convertArrayItemsToNumbers';
import { getGNDCoordinates } from '../AdditionalNormalizing/getGNDCoordinates';

// GND entities can have various types of geometry (e.g. "Point" or "Polygon"). In this app only those entities of GND are showed on the map, that have type of "Point".

export const normalizeGND = database => {
  return database
    .filter(item => item.preferredName || item.type || item.gndIdentifier)
    .map(item => {
      let { preferredName: name, id: link, gndIdentifier: id, ...rest } = item;
      id = id.toString();
      if (item.hasOwnProperty('hasGeometry')) {
        const { hasGeometry, ...other } = rest;
        if (item.hasGeometry[0].type === 'Point') {
          const coordinates = getGNDCoordinates(hasGeometry);
          const position = convertArrayItemsToNumbers([coordinates[1], coordinates[0]]);
          return {
            id,
            position: position,
            name,
            link,
            id,
            ...other,
          };
        } else {
          return {
            id,
            name,
            link,
            id,
            ...other,
          };
        }
      } else {
        return { id, name, link, id, ...rest };
      }
    });
};
