// Extract coordinates to form a valid bounding box object for request

export const getCoordinatesForBB = item => {
  const bounds = item[Object.keys(item)]._bounds;
  return [
    { lat: bounds._southWest.lat, lng: bounds._southWest.lng },
    { lat: bounds._northEast.lat, lng: bounds._southWest.lng },
    { lat: bounds._northEast.lat, lng: bounds._northEast.lng },
    { lat: bounds._southWest.lat, lng: bounds._northEast.lng },
  ];
};
