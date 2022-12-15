// Get GND coordinates (from original attribute "hasGeometry")

export const getGNDCoordinates = hasGeometry => {
  const geometry = hasGeometry[0].asWKT[0].split(' ');
  return geometry.filter(el => !isNaN(el));
};
