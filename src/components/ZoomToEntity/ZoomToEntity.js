import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import { useDispatch } from 'react-redux';
import { handleZoomToEntity } from 'redux/map-interaction-reducer';
import { validateLocations } from 'utils/validators/PropertyValidators/validateLocations';

// Component to contain a tool that allows to zoom to entity on the map, if the entity has valid coordinates

const ZoomToEntity = ({ details, gazName }) => {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(handleZoomToEntity(details, gazName))}>
      {validateLocations(details) && (
        <TooltipContainer placement='left' icon={faMapMarker} text='tt_zoom_to' />
      )}
    </div>
  );
};

export default ZoomToEntity;
