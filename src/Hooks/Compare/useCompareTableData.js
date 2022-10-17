import { getAbstractMetaAttributes } from 'constants/getAbstractMetaAttributes';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getOriginalEntries } from 'selectors/simple-selectors/results-selectors';
import { getMetaAttributeFromOriginalAttributes } from 'utils/Filtering/getMetaAttributeFromOriginalAttributes';
import { findOriginalEntry } from '../../utils/Helpers/CompareHelpers/findOriginalEntry';

// Hook to provide functionalities for compare table. It tracks gazetteer original data and prepares data for export

export function useCompareTableData(entities) {
  const originalEntries = useSelector(getOriginalEntries);
  let [data, setData] = useState([]);
  let [dataForExport, setDataForExport] = useState(new Set());
  useEffect(() => {
    const abstractMetaAttributes = getAbstractMetaAttributes();
    let entity = abstractMetaAttributes.map(el => ({ attribute: el }));
    let entityToExport = abstractMetaAttributes.reduce((acc, curr) => ((acc[curr] = ''), acc), {});
    entities
      .filter(el => !el.loading)
      .forEach(el => {
        const originalElement = findOriginalEntry(originalEntries, el);
        entity.forEach(element => {
          const elementToParse = getMetaAttributeFromOriginalAttributes(
            el.gazName,
            originalElement,
            element.attribute
          );
          element[el.gazName + el.entity.id] = elementToParse;
          entityToExport[element.attribute] = elementToParse;
        });
        setDataForExport(oldData => oldData.add(entityToExport));
        setData(entity);
      });
  }, [entities]);
  return { data, dataForExport };
}
