import React from 'react';
import DetailsHeaderClasses from './DetailsHeader.module.css';

const DetailsHeader = ({ name, id }) => {
  return (
    <div className={DetailsHeaderClasses.detailsHeader}>
      {name} (id: {id})
    </div>
  );
};

export default DetailsHeader;
