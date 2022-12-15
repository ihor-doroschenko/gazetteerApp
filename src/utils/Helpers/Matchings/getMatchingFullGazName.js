import { gazetteerInfo } from 'constants/getGazetteerInfo';

export const getMatchingFullGazName = key => {
  return gazetteerInfo[key] ? gazetteerInfo[key].text : '';
};
