import React from 'react';

// Component to contain link property of matchings (in details view)

const MatchingLinkInDetails = ({ matching }) => {
  return (
    <div>
      {matching.link && (
        <span>
          <b>link: </b>
          <a href={matching.link} target='_blank' rel='noopener noreferrer'>
            {matching.link}
          </a>
        </span>
      )}
    </div>
  );
};
export default MatchingLinkInDetails;
