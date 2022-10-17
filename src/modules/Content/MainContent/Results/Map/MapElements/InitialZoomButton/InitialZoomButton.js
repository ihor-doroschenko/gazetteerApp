import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setInitialZoomContainer } from 'redux/map-interaction-reducer';
import InitialZoomButtonClasses from './InitialZoomButton.module.css';

const InitialZoomButton = () => {
  const dispatch = useDispatch();
  return (
    <div
      className={InitialZoomButtonClasses.container}
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

export default InitialZoomButton;
