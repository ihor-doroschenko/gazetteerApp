import Preloader from 'components/Preloader/Preloader';
import React from 'react';
import Details from './Details';

// Wrapper component to contain condition to show preloader if the data for the detail view is still loading or Details component if the data are available

const DetailsContainer = props => {
  const { gazName, details, ...rest } = props;
  return (
    <>
      {details.loading ? <Preloader gazName={gazName} /> : <Details details={details} {...rest} />}
    </>
  );
};
export default DetailsContainer;
