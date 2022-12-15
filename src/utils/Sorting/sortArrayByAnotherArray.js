// Sort one array by values of another

export const sortArrayByAnotherArray = (itemsArray, sortingArr) => {
  return itemsArray.sort((a, b) => sortingArr.indexOf(a) - sortingArr.indexOf(b));
};
