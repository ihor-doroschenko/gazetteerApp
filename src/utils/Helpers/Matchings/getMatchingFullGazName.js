import { gazetteerInfo } from 'constants/getGazetteerInfo';

// Gez gazetteer full name

export const getMatchingFullGazName = key => {
  return gazetteerInfo[key] ? gazetteerInfo[key].text : '';
};
