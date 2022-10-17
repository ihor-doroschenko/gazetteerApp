export const sortArrayByAnotherArray = (itemsArray, sortingArr) => {
  return itemsArray.sort((a, b) => {
    return sortingArr.indexOf(a) - sortingArr.indexOf(b);
  });
};
