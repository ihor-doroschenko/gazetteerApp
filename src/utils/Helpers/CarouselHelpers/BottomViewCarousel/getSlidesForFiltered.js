export const getSlidesForFiltered = (isNoData, filtered) => {
  if (filtered.length < 3) {
    return isNoData ? filtered.length + 1 : filtered.length;
  } else {
    return 3;
  }
};
