import React from 'react';
import DetailsHeaderClasses from './DetailsHeader.module.css';

// Component to contain header for the detail table

const DetailsHeader = ({ name, id }) => {
  return (
    <div className={DetailsHeaderClasses.detailsHeader}>
      {name} (id: {id})
    </div>
  );
};

export default DetailsHeader;
