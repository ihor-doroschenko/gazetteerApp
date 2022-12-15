import React from 'react';
import MatchingsClasses from './Matchings.module.css';

// Component to contain properties (e.g. attributes) of the matchings. Please note that db property is not shown here - the gazetteer name (db) is shown separately

const MatchingsProperty = ({ item, property }) => {
  const itemProp = item[property];
  return (
    <>
      {itemProp && property !== 'db' && (
        <div>
          <span style={{ color: 'black' }}>{property}:&nbsp;</span>
          <span className={MatchingsClasses.itemValue}>{itemProp}</span>
        </div>
      )}
    </>
  );
};

export default MatchingsProperty;
