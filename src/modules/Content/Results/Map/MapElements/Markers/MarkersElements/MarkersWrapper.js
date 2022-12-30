import { useMarkersWrapperData } from 'Hooks/Map/useMarkersWrapperData';
import React from 'react';
import { getKey } from 'utils/TextHandlers/getKey';
import MarkersGazContainer from './MarkersGazContainer';

// Wrapper component to contain markers for all entities that have valid coordinates. It includes entities requested at original search as well as those requested externally

const MarkersWrapper = props => {
  const data = useMarkersWrapperData();
  return (
    <>
      {data.map(gazName => (
        <MarkersGazContainer key={getKey(gazName, 'markersWrapper')} gazName={gazName} />
      ))}
    </>
  );
};

export default React.memo(MarkersWrapper);
