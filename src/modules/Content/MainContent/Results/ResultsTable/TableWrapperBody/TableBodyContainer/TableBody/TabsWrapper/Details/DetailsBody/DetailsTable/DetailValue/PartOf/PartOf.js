import React from 'react';
import PartOfImage from './PartOfImage';

const PartOf = ({ image, id }) => {
  return (
    <div>
      {image.status ? (
        <PartOfImage image={image} id={id} />
      ) : (
        <div>
          <p>{image.info}</p>
        </div>
      )}
    </div>
  );
};

export default PartOf;
