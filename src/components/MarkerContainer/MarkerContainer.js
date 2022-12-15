import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import MarkerContainerClasses from './MarkerContainer.module.css';
import SvgMarkerComponent from './SvgMarkerComponent';

// Wrapper component to contain a marker or a respective icon showing that there is no spatial information related to the entity

const MarkerContainer = ({
  internId,
  position,
  gazName,
  mapMarker = false,
  isMouseOverElementInfinite = false,
}) => {
  const element = position ? (
    <SvgMarkerComponent gazName={gazName} mapMarker={mapMarker} internId={internId} />
  ) : (
    <FontAwesomeIcon icon={faQuestion} className={MarkerContainerClasses.questionMark} />
  );
  return (
    <div
      className={classNames(MarkerContainerClasses.markerWrap, {
        [MarkerContainerClasses.mousedMarkerWrapInifinite]: isMouseOverElementInfinite,
        [MarkerContainerClasses.markerWrapMoused]: mapMarker,
      })}>
      {element}
    </div>
  );
};

export default withReactMemo(MarkerContainer);
