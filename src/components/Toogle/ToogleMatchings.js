import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';

// Wrapper component to contain switcher to show only results with matchings or to show all results

const ToogleMatchings = props => {
  return (
    <div>
      <div onClick={props.callback}>
        <TooltipContainer
          placement='left'
          icon={props.onlyMatchedResults ? faToggleOn : faToggleOff}
          text={props.onlyMatchedResults ? props.offTooltip : props.onTooltip}
        />
      </div>
      <p style={{ color: !props.onlyMatchedResults && 'rgba(0,0,0,0.3)' }}>
        Show only results with matchings: {props.onlyMatchedResults ? 'Enabled' : 'Disabled'}
      </p>
    </div>
  );
};

export default ToogleMatchings;
