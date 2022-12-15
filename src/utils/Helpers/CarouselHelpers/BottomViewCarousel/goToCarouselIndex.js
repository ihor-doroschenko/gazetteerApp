import { checkOneSlideIndexes } from './checkOneSlideIndexes';

// Go to required subtable in slick wrapper (carousel) in the bottom view

export const goToCarouselIndex = (nextCarouselIndex, state, setState, slider) => {
  if (checkOneSlideIndexes(state, nextCarouselIndex)) {
    slider.slickGoTo(nextCarouselIndex);
    setState(nextCarouselIndex);
  }
};
