import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import { useDispatch } from 'react-redux';
import { handleZoomTo } from 'redux/map-interaction-reducer';
import { validateLocations } from 'utils/validators/PropertyValidators/validateLocations';

const ZoomToEntity = ({ details }) => {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(handleZoomTo(details))}>
      {validateLocations(details) && (
        <TooltipContainer placement='left' icon={faMapMarker} text='tt_zoom_to' />
      )}
    </div>
  );
};

export default ZoomToEntity;
