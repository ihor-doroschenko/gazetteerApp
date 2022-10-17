export const makeValueHeadersItalic = values => {
  return values.join(' ').replace(/.*: /g, '<em>$&</em>');
};
