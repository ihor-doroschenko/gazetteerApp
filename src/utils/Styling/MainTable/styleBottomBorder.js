// Get style for border for results table in bottom view

export const styleBottomBorder = (index, dataLength) => {
  return {
    className: index !== dataLength - 1 ? 'borderBottom' : '',
  };
};
