import React from 'react';
import NoDataClasses from './NoData.module.css';

const NoData = props => {
  return (
    <div className={NoDataClasses.noData}>
      <p>No Data available for given name</p>
    </div>
  );
};

export default NoData;
