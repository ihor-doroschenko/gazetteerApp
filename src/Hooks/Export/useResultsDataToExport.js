import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getEntries } from 'selectors/simple-selectors/matching-selectors';
import { getHeadersForResultsExport } from 'utils/Exporting/getHeadersForResultsExport';
import { combineTwoArraysIntoObject } from 'utils/ObjectOperations/combineTwoArraysIntoObject';

// Hook to provide export for results data
// TODO: make a module from useResultsDataToExport and useMatchingsDataToExport
export function useResultsDataToExport() {
  const entries = useSelector(getEntries);
  const headers = getHeadersForResultsExport();
  const [resultsDataToExport, setValuesToExport] = useState([]);
  let vals = [];
  useEffect(() => {
    for (let key of Object.keys(entries)) {
      for (let el of entries[key]) {
        const { internId, id, name, type, position } = el;
        let values = [key, internId, id, name, type, position ? position : []];
        let resultsObj = combineTwoArraysIntoObject({ headers, values });
        vals = [...vals, resultsObj];
      }
    }
    setValuesToExport(vals);
  }, [entries]);
  return { resultsDataToExport, headers };
}
