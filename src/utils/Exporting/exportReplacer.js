// Replacer for export function to replace other falsy values with empty string

export const replacer = (key, value) => (!value ? '' : value);
