// Get name (place name) to form name of the file to export

import { removeDiacritics } from './removeDiacritics';

export const getNameForExport = name => {
  const withoutDiacritica = removeDiacritics(name);
  return withoutDiacritica
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .replace(/\s/g, '-')
    .replace(/\-$/, '');
};
