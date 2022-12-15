import { useEffect, useState } from 'react';
import { getHeadersAndValuesForDetailsExport } from 'utils/Exporting/getHeadersAndValuesForDetailsExport';

// Hook to provide export for details data

export function useDetailsDataToExport(data) {
  const [attributesToExport, setAttributesToExport] = useState([]);
  const [valuesToExport, setValuesToExport] = useState([]);
  useEffect(() => {
    const [attributes, values] = getHeadersAndValuesForDetailsExport(data);
    setAttributesToExport(attributes);
    setValuesToExport(values);
  }, [data]);
  return { attributes: attributesToExport, values: valuesToExport };
}
