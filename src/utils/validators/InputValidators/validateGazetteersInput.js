// Validate if gazetteer input for intended request is correct

export const validateGazetteersInput = databases => {
  return databases && databases.length !== 0;
};
