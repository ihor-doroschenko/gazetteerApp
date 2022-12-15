// Check whether requested gazetteer already has entities

export const validateStatus = entities => {
  return Object.values(entities).length !== 0 && !Object.values(entities).includes('isFetching');
};
