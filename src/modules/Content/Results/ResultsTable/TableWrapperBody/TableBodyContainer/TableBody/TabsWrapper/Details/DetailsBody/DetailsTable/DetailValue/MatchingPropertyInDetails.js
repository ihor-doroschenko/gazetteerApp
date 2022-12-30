import React from 'react';

// Component to contain properties of matchings if these are not links (in details view)

const MatchingPropertyInDetails = ({ item, property }) => {
  return (
    <>
      {property !== 'link' && (
        <div>
          {item[property] && (
            <span>
              <b>{property === 'db' ? 'gazetteer' : property}: </b>
              {item[property]}
            </span>
          )}
        </div>
      )}
    </>
  );
};

export default MatchingPropertyInDetails;
