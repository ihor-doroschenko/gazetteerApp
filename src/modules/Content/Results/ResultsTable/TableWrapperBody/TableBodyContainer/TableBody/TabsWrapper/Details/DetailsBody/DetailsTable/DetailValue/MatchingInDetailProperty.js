import React from 'react';

const MatchingInDetailProperty = ({ item, property }) => {
  return (
    <div>
      {item[property] && (
        <span>
          <b>{property === 'db' ? 'gazetteer' : property}: </b>
          {item[property]}
        </span>
      )}
    </div>
  );
};

export default MatchingInDetailProperty;
