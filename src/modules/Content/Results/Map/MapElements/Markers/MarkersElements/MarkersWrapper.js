import { useMarkersWrapperData } from 'Hooks/Map/useMarkersWrapperData';
import React from 'react';
import MarkersGazContainer from './MarkersGazContainer';

// Wrapper component to contain markers for all entities that have valid coordinates. It includes entities requested at original search as well as those requested externally

const MarkersWrapper = props => {
  const data = useMarkersWrapperData();
  return (
    <>
      {data.map(gazName => (
        <MarkersGazContainer gazName={gazName} />
      ))}
    </>
  );
};

export default React.memo(MarkersWrapper);
