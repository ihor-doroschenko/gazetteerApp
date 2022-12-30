import React from 'react';
import PartOfGraph from './PartOfGraph';

// Wrapper component to contain the part-of graph. If the graph request was successfull, show the graph, if not, show the error message

const PartOf = ({ image, id }) => {
  return (
    <div>
      {image.status ? (
        <PartOfGraph image={image} id={id} />
      ) : (
        <div>
          <p>{image.info}</p>
        </div>
      )}
    </div>
  );
};

export default PartOf;
