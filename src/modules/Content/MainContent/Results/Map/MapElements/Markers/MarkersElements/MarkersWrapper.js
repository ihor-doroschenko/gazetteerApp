import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleMouseClick, mouseOut, mouseOver } from 'redux/map-interaction-reducer';
import { getMouseOverElementInfinite } from 'selectors/simple-selectors/map-interaction-selectors';
import { getEntries } from 'selectors/simple-selectors/matching-selectors';
import { getSeparateEntries } from 'selectors/simple-selectors/results-selectors';
import { getGazetteers } from 'selectors/simple-selectors/search-selectors';
import { filterEntitiesWithCoordinates } from 'utils/Filtering/filterEntitiesWithCoordinates';
import Markers from './Markers';

const MarkersWrapper = props => {
  const dispatch = useDispatch();
  const gazetteers = useSelector(getGazetteers);
  const mouseOverElementInfinite = useSelector(getMouseOverElementInfinite);
  const entries = useSelector(getEntries);
  const separateEntries = useSelector(getSeparateEntries);
  const entriesWithValidCoordinates = filterEntitiesWithCoordinates(entries);
  const separateEntriesWithValidCoordinates = filterEntitiesWithCoordinates(separateEntries);

  const markers = entriesWithValidCoordinates
    .concat(separateEntriesWithValidCoordinates)
    .map(element => {
      const { entity, gazName } = element;
      return (
        <Markers
          key={entity.id}
          id={entity.id}
          name={entity.name}
          internId={entity.internId}
          mouseOverElementInfinite={mouseOverElementInfinite}
          position={entity.position}
          color={gazetteers.find(e => e.gazName === gazName).color}
          gazName={gazName}
          mouseOver={() => dispatch(mouseOver({ gazName: gazName, id: entity.id }))}
          mouseOut={() => dispatch(mouseOut())}
          handleMouseClick={() => dispatch(handleMouseClick({ gazName: gazName, id: entity.id }))}
        />
      );
    });
  return <>{markers}</>;
};

export default MarkersWrapper;
