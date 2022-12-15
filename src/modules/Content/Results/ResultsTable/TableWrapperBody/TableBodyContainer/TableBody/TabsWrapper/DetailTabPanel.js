import Error from 'components/Error/Error';
import React from 'react';
import DetailsContainer from './Details/DetailsBody/DetailsContainer';

const DetailTabPanel = ({ el, gazName }) => {
  const { details } = el;
  const { error, id } = details;
  return (
    <>
      {error ? (
        <Error text={error} item={`id: ${id}`} />
      ) : (
        <DetailsContainer gazName={gazName} selectedDetails={el} />
      )}
    </>
  );
};
export default DetailTabPanel;
