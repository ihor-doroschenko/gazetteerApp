import React from 'react';
import MatchingsClasses from './Matchings.module.css';

const MatchingsProperty = ({ item, property }) => {
  return (
    <>
      {item[property] && (
        <div>
          <span style={{ color: 'black' }}>{property}:&nbsp;</span>
          <span className={MatchingsClasses.itemValue}>{item[property]}</span>
        </div>
      )}
    </>
  );
};

export default MatchingsProperty;
