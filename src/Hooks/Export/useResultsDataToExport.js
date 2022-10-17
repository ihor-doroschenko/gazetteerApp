import { getHeadersForResultsExport } from 'constants/getHeadersForResultsExport';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getEntries } from 'selectors/simple-selectors/matching-selectors';
import { combineTwoArraysIntoObject } from 'utils/Combining/combineTwoArraysIntoObject';

// Hook to provide export for results data

export function useResultsDataToExport() {
  const entries = useSelector(getEntries);
  const headers = getHeadersForResultsExport();
  const [resultsDataToExport, setValuesToExport] = useState([]);
  let vals = [];
  useEffect(() => {
    for (let key of Object.keys(entries)) {
      for (let el of entries[key]) {
        let values = [key, el.internId, el.id, el.name, el.type, el.position ? el.position : []];
        let resultsObj = combineTwoArraysIntoObject({ headers, values });
        vals = [...vals, resultsObj];
      }
    }
    setValuesToExport(vals);
  }, [entries]);
  return { resultsDataToExport, headers };
}
