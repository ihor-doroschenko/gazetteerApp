export const prepareGeoJSONExport = data => {
  const copiedData = JSON.parse(JSON.stringify(data));
  const geoJSONData = {
    type: 'FeatureCollection',
    features: [],
  };
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
