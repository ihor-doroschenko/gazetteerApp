import { TooltipTextes } from 'constants/TooltipTextes';

export const defaultLanguage = 'en';

export const getTooltipTextes = (textid, lang) => {
  if (TooltipTextes.hasOwnProperty(textid)) {
    const prop = TooltipTextes[textid];
    if (prop.hasOwnProperty(lang)) {
      return prop[lang];
    } else if (prop.hasOwnProperty(defaultLanguage)) {
      return prop[defaultLanguage];
    }
  }
  return '';
};
