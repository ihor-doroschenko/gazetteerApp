import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFilteredMatchingsEntities } from 'selectors/simple-selectors/matching-selectors';
import { getHeadersForMatchingExport } from 'utils/Exporting/getHeadersForMatchingExport';
import { combineTwoArraysIntoObject } from 'utils/ObjectOperations/combineTwoArraysIntoObject';

// Hook to provide combined (combining means creating a new data from matching as well as from entities) export for matching data

export function useMatchingsDataToExport() {
  const filteredMatchings = useSelector(getFilteredMatchingsEntities);
  const headers = getHeadersForMatchingExport();
  const [matchingsDataToExport, setValuesToExport] = useState([]);
  let vals = [];
  useEffect(() => {
    for (let key of Object.keys(filteredMatchings)) {
      for (let el of filteredMatchings[key]) {
        for (let matching of el.matchings) {
          const { db, id, type, description, link } = matching;
          let values = [key, el.id, el.name, db, id, type, description, link];
          let matchingsObj = combineTwoArraysIntoObject({ headers, values });
          vals = [...vals, matchingsObj];
        }
      }
    }
    setValuesToExport(vals);
  }, [filteredMatchings]);
  return { matchingsDataToExport, headers };
}
