import cloneDeep from 'lodash.clonedeep';
import { getGeoJSONBasicStructure } from './getGeoJSONBasicStructure';

// Generate GeoJSON-specific data from the data selected to export as GeoJSON

export const generateGeoJSONExport = data => {
  const copiedData = cloneDeep(data);
  const geoJSONData = getGeoJSONBasicStructure();
  copiedData.forEach(el => {
    const { position, ...rest } = el;
    let feature = {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: position ? position.reverse() : [],
      },
      properties: rest,
    };
    geoJSONData.features.push(feature);
  });
  return geoJSONData;
};
