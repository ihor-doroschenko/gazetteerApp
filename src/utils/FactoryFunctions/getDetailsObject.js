export const getDetailsObject = (gazName, details) => {
  return {
    details: details,
    gazName: gazName,
    isFilled: false,
    status: false,
    isEssential: false,
  };
};
