// Create an object for the results view containing gazetteer name, actualState (data request status), color (for markers visualization), and types (entities of that gazetteer)

export const getResultsObjectForTable = (gazName, text, actualState, color, types = []) => {
  return {
    gazName,
    text,
    actualState,
    color,
    types,
  };
};
