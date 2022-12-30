import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  getExternGazetteerEntities,
  getGazetteerEntities,
  getGazetteerStatus,
} from 'selectors/reselectors/simple-reselectors';
import { getIsMatched } from 'selectors/simple-selectors/matching-selectors';
import { getUsedGazetteers } from 'selectors/simple-selectors/results-selectors';
import { filterEntitiesWithCoordinates } from 'utils/Filtering/filterEntitiesWithCoordinates';
import { getMarkerParameters } from 'utils/Helpers/MapHelpers/getMarkerParameters';
import { getKey } from 'utils/TextHandlers/getKey';
import Markers from './Markers';

// Wrapper component to contain group of markers which visualize entities with valid coordinates on the map. Each component is related to one gazetteer

const MarkersGazContainer = ({ gazName }) => {
  const entities = useSelector(state => getGazetteerEntities(state, gazName));
  const status = useSelector(state => getGazetteerStatus(state, gazName));
  const externEntities = useSelector(state => getExternGazetteerEntities(state, gazName));
  const usedGazetteers = useSelector(getUsedGazetteers);
  const isMatched = useSelector(getIsMatched);

  const markers = useMemo(() => {
    if (status === 'done' || externEntities) {
      const pars = getMarkerParameters({ usedGazetteers, gazName, entities, externEntities });
      const entitiesWithValidCoordinates = filterEntitiesWithCoordinates(pars);
      return entitiesWithValidCoordinates.map(element => {
        const { entity, gazName } = element;
        const { id, name, internId, position } = entity;
        const key = getKey(id, 'markers');
        return (
          <Markers
            key={key}
            id={id}
            name={name}
            internId={internId}
            position={position}
            gazName={gazName}
          />
        );
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, externEntities, isMatched]);

  return <>{markers}</>;
};
export default MarkersGazContainer;
