import * as axios from 'axios';

// Instance of axios used for all other requests (with base url as a parameter)
const instanceAxios = axios.create({
  baseURL: 'http://localhost:8000/',
});

export const resultsAPI = {
  // Request to get main search results with method getMainResults of GET-type with 4 required parameters (gaz, name, resultschema, namesearchmode) and 6 optional parameters (north, south, west, east, settlement, matchings).
  getMainResults(gazetteer, searchText, coordinates, searchType, match, settlement) {
    return instanceAxios.get(`${gazetteer}`);
  },
  // Request to get one entity with method getEntityById of GET-type with 3 required parameters (gaz, id, resultschema).
  getEntityById(gazetteer, id) {
    return instanceAxios.get('unavailableMatching');
  },
};

// Request to get part-of-information about a GOV-entity with method getPartOf of GET-type with 3 required parameters (gaz, id, resultschema) and with method getPartOfPicture of GET-type with 3 required parameters (gaz, id, partofimg).
export const partOfAPI = {
  getPartOf(govId) {
    return instanceAxios.get('fcts.php', {
      params: {
        gaz: 'gov',
        id: govId,
        resultschema: 'org',
      },
    });
  },
  getPartOfPicture(govId) {
    return instanceAxios.get('fcts.php', {
      params: {
        gaz: 'gov',
        id: govId,
        partofimg: true,
      },
    });
  },
};
