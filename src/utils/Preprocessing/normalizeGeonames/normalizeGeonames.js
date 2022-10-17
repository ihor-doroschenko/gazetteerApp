import { convertArrayItemsToNumbers } from 'utils/Converting/convertArrayItemsToNumbers';

// Geonames has three attributes that refer to type of feature: S, fclName, and fcodeName, see Geonames documentation http://download.geonames.org/export/dump/readme.txt . fclName is selected as type for the visualization as the most detailed feature type and simultaneously the most development-friendly for type filtering

export const normalizeGeonames = database => {
  return database
    .filter(item => item.fclName || item.name || item.geonameId)
    .map(el => {
      let { geonameId, fclName, lat, lng, ...rest } = el;
      const position = convertArrayItemsToNumbers([lat, lng]);
      geonameId = geonameId.toString();
      return {
        id: geonameId,
        type: fclName,
        position: position,
        ...rest,
      };
    });
};
