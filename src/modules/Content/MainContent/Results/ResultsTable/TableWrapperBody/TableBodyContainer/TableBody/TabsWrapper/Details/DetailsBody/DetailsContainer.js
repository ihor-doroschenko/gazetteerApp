import Preloader from 'components/Preloader/Preloader';
import React from 'react';
import Details from './Details';

const DetailsContainer = props => {
  const { gazName, selectedDetails, ...rest } = props;
  return (
    <>
      {selectedDetails.loading ? (
        <Preloader gazName={gazName} />
      ) : (
        <Details details={selectedDetails} {...rest} />
      )}
    </>
  );
};
export default DetailsContainer;
