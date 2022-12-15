//// Create an object containing data for the detail view as well as its gazetteer name and some boolean values as isFilled (show only attributes with values), status ( additional data request status), and isEssential (show only essential attributes)

export const getDetailsWrapperStructure = (
  gazName,
  details,
  isFilled = false,
  status = false,
  isEssential = false
) => {
  return {
    details,
    gazName,
    isFilled,
    status,
    isEssential,
  };
};
