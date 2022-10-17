import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';

const ToogleMatchings = props => {
  return (
    <div>
      <div onClick={props.callback}>
        <TooltipContainer
          placement='left'
          icon={props.isMatched ? faToggleOn : faToggleOff}
          text={props.isMatched ? props.offTooltip : props.onTooltip}
        />
      </div>
      <p style={{ color: !props.isMatched && 'rgba(0,0,0,0.3)' }}>
        Show only results with matchings: {props.isMatched ? 'Enabled' : 'Disabled'}
      </p>
    </div>
  );
};

export default ToogleMatchings;
