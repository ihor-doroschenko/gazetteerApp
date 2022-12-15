import { defaultDiacriticsRemoval } from 'constants/defaultDiacriticsRemoval';

// Remove diacritics and accents from the string

export const removeDiacritics = str => {
  for (let i = 0; i < defaultDiacriticsRemoval.length; i++) {
    str = str.replace(defaultDiacriticsRemoval[i].letters, defaultDiacriticsRemoval[i].base);
  }
  return str;
};
