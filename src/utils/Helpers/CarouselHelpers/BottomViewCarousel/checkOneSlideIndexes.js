// Check whether is required subtable is visible in viewport in the bottome view. As only three subtable could be shown at once in the bottome view, it will check whether it should be autoscrolled to required table

export const checkOneSlideIndexes = (index, nextCarouselIndex) => {
  return (
    nextCarouselIndex !== -1 &&
    index !== nextCarouselIndex &&
    index + 1 !== nextCarouselIndex &&
    index + 2 !== nextCarouselIndex
  );
};
