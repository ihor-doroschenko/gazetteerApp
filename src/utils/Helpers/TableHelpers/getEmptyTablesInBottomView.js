import React from 'react';

// Filter out and generate list entity containing name of gazetteers that don't have data for current search, while results are in the bottom view

export const getEmptyTablesInBottomView = data => {
  return data
    .filter(d => d.actualState === 'noData')
    .map((data, index) => <li key={index}>{data.gazName}</li>);
};
