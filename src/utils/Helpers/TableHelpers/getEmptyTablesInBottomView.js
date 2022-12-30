import React from 'react';
import { getKey } from 'utils/TextHandlers/getKey';

// Filter out and generate list entity containing name of gazetteers that don't have data for current search, while results are in the bottom view

export const getEmptyTablesInBottomView = data => {
  return data
    .filter(d => d.actualState === 'noData')
    .map((data, index) => {
      const key = getKey(index, 'emptyTables');
      return <li key={key}>{data.gazName}</li>;
    });
};
