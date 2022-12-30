import { getAbstractMetaAttributes } from 'constants/getAbstractMetaAttributes';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getOriginalEntities } from 'selectors/simple-selectors/results-selectors';
import { getMetaAttributeFromOriginalAttributes } from 'utils/Helpers/CompareHelpers/getMetaAttributeFromOriginalAttributes';

// Hook to provide functionalities for compare table. It tracks gazetteer original data and prepares data for export

export function useCompareTableData(entities) {
  const originalEntities = useSelector(getOriginalEntities);
  let [data, setData] = useState([]);
  let [dataForExport, setDataForExport] = useState(new Set());
  useEffect(() => {
    const abstractMetaAttributes = getAbstractMetaAttributes();
    let entity = abstractMetaAttributes.map(el => ({ attribute: el }));
    let entityToExport = abstractMetaAttributes.reduce((acc, curr) => ((acc[curr] = ''), acc), {});
    entities
      .filter(el => !el.loading)
      .forEach(el => {
        entity.forEach(element => {
          const elementToParse = getMetaAttributeFromOriginalAttributes(
            el,
            originalEntities,
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
