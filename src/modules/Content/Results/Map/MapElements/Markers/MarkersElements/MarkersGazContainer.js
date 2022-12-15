import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getEntries } from 'selectors/simple-selectors/matching-selectors';
import {
  getExternEntities,
  getStatus,
  getUsedGazetteers,
} from 'selectors/simple-selectors/results-selectors';
import { filterEntitiesWithCoordinates } from 'utils/Filtering/filterEntitiesWithCoordinates';
import { getMarkerParameters } from 'utils/Helpers/MapHelpers/getMarkerParameters';
import Markers from './Markers';

// Wrapper component to contain group of markers which visualize entities with valid coordinates on the map. Each component is related to one gazetteer

const MarkersGazContainer = ({ gazName }) => {
  const [markers, setMarkers] = useState([]);
  const entities = useSelector(getEntries);
  const status = useSelector(getStatus);
  const externEntities = useSelector(getExternEntities);
  const usedGazetteers = useSelector(getUsedGazetteers);

  useEffect(() => {
    if (status[gazName] === 'done' || externEntities.hasOwnProperty(gazName)) {
      const pars = getMarkerParameters({ usedGazetteers, gazName, entities, externEntities });
      const entitiesWithValidCoordinates = filterEntitiesWithCoordinates(pars);
      const el = entitiesWithValidCoordinates.map(element => {
        const { entity, gazName } = element;
        const { id, name, internId, position } = entity;
        return (
          <Markers
            key={`${id}_${gazName}_container`}
            id={id}
            name={name}
            internId={internId}
            position={position}
            gazName={gazName}
          />
        );
      });
      setMarkers(el);
    }
  }, [status[gazName], externEntities[gazName]]);

  return <>{markers}</>;
};
export default MarkersGazContainer;
