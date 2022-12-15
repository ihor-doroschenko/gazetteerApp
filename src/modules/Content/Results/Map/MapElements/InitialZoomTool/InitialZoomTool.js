import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setInitialZoomContainer } from 'redux/map-interaction-reducer';
import InitialZoomToolClasses from './InitialZoomTool.module.css';

// Component to contain button to go back to  initial zoom level of the map

const InitialZoomTool = () => {
  const dispatch = useDispatch();
  return (
    <div
      className={InitialZoomToolClasses.container}
      onClick={() => dispatch(setInitialZoomContainer())}>
      <TooltipContainer
        placement='right'
        icon={faGlobe}
        text='tt_export_initial_zoom'
        delay={true}
      />
    </div>
  );
};

export default InitialZoomTool;
