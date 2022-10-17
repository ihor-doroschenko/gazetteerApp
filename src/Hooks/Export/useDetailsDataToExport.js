import { useEffect, useState } from 'react';
import { getAttrsAndValuesForDetailsExport } from 'utils/Helpers/DetailHelpers/getAttrsAndValuesForDetailsExport';

// Hook to provide export for details data

export function useDetailsDataToExport(data) {
  const [attributesToExport, setAttributesToExport] = useState([]);
  const [valuesToExport, setValuesToExport] = useState([]);
  useEffect(() => {
    const [attributes, values] = getAttrsAndValuesForDetailsExport(data);
    setAttributesToExport(attributes);
    setValuesToExport(values);
  }, [data]);
  return { attributes: attributesToExport, values: valuesToExport };
}
