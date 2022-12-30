import Error from 'components/Error/Error';
import React from 'react';
import DetailsContainer from './DetailsBody/DetailsContainer';

// Wrapper component to contain condition to show error component if there is no data currentl to show for the detail view because of the request error or details container if the data are available

const DetailTabPanel = ({ el, gazName }) => {
  const { detail } = el;
  const { error, id } = detail;
  return (
    <>
      {error ? (
        <Error text={error} item={`id: ${id}`} />
      ) : (
        <DetailsContainer gazName={gazName} details={el} />
      )}
    </>
  );
};
export default DetailTabPanel;
