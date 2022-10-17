export const styleBottomBorder = (index, dataLength) => {
  return {
    className: index !== dataLength - 1 ? 'borderBottom' : '',
  };
};
