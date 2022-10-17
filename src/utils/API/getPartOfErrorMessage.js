// Generate error message for case if it will be error in part-of request for GOV
export const getPartOfErrorMessage = (error, element) => {
  const { ref, ...rest } = element;
  return {
    ref: `${ref} (an original id, the reference is not possible because an error ${error.response.status} occured)`,
    ...rest,
  };
};
