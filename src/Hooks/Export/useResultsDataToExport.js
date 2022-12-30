import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getEntities } from 'selectors/simple-selectors/matching-selectors';
import { getHeadersForResultsExport } from 'utils/Exporting/getHeadersForResultsExport';
import { combineTwoArraysIntoObject } from 'utils/ObjectOperations/combineTwoArraysIntoObject';

// Hook to provide export for results data

export function useResultsDataToExport() {
  const entities = useSelector(getEntities);
  const headers = getHeadersForResultsExport();
  const [resultsDataToExport, setValuesToExport] = useState([]);
  useEffect(() => {
    let vals = [];
    for (let key of Object.keys(entities)) {
      for (let el of entities[key]) {
        const { internId, id, name, type, position } = el;
        let values = [key, internId, id, name, type, position ? position : []];
        let resultsObj = combineTwoArraysIntoObject({ headers, values });
        vals = [...vals, resultsObj];
      }
    }
    setValuesToExport(vals);
  }, [entities]);
  return { resultsDataToExport, headers };
}
