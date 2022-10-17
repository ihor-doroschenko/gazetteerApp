export const goToCarouselIndex = (filtered, element, state, setState, slider) => {
  const nextCarouselIndex = filtered.findIndex(el => el.gazName === element.gazName);
  if (checkOneSlideIndexes(state, nextCarouselIndex)) {
    slider.slickGoTo(nextCarouselIndex);
    setState(nextCarouselIndex);
  }
};

const checkOneSlideIndexes = (index, nextCarouselIndex) => {
  return (
    nextCarouselIndex !== -1 &&
    index !== nextCarouselIndex &&
    index + 1 !== nextCarouselIndex &&
    index + 2 !== nextCarouselIndex
  );
};
