import React from 'react';
import NoDataClasses from './NoData.module.css';

// Component to contain text for subtables of trequested gazetteers that do not provide any data (side view)

const NoData = props => {
  return (
    <div className={NoDataClasses.noData}>
      <p>No Data available for given name</p>
    </div>
  );
};

export default NoData;
