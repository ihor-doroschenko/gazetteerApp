import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import MarkerContainerClasses from './MarkerContainer.module.css';
import SvgMarkerComponent from './SvgMarkerComponent';

const MarkerContainer = ({ internId, position, color, mapMarker, isMouseOverElementInfinite }) => {
  const element = position ? (
    <SvgMarkerComponent color={color} border='#989898' mapMarker={mapMarker} internId={internId} />
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
