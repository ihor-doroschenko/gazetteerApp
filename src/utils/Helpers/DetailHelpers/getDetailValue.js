import DetailValue from 'modules/Content/MainContent/Results/ResultsTable/TableWrapperBody/TableBodyContainer/TableBody/TabsWrapper/Details/DetailsBody/DetailsTable/DetailValue/DetailValue';
import React from 'react';

export const getDetailValue = originalValue => {
  return !originalValue ? '' : <DetailValue value={originalValue} />;
};
