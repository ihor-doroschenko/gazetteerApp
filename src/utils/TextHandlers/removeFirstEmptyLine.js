export const removeFirstEmptyLine = values => {
  if (values[0] === '\n') {
    values.shift();
  }
};
