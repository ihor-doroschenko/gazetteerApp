export const getRightContainerDimensions = () => {
  const rightContainerMaxWidth = getRightContainerMaxWidth();
  const rightContainerElementDefaultWidth = getRightContainerElementDefaultWidth();
  return { rightContainerMaxWidth, rightContainerElementDefaultWidth };
};

export const getRightContainerMaxWidth = () => {
  const rightContainerMaxWidthoutMargin = 96;
  const rightContainerMaxWidth = rightContainerMaxWidthoutMargin - 2;
  return rightContainerMaxWidth;
};
export const getRightContainerElementDefaultWidth = () => {
  return 400;
};
