import ResultsTableBottom from 'modules/Content/Results/ResultsTable/TableWrapperBody/Bottom/ResultsTableBottom';
import React from 'react';
import { getKey } from 'utils/TextHandlers/getKey';

//Get subtables for gazetteer specific results if there are data in them

export const getBottomTables = data => {
  return data.map(el => {
    const key = getKey(el.gazName, 'bottomTables');
    return el.actualState !== 'noData' && <ResultsTableBottom data={el} key={key} />;
  });
};
