import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';

// Wrapper component to contain switcher to show all attributes regadless whether they have values or not or to show only those attributes that have values

const ToogleSkip = props => {
  return (
    <div onClick={props.callback}>
      <TooltipContainer
        placement='top'
        icon={props.isFilled ? faPlusSquare : faMinusSquare}
        text={props.isFilled ? 'tt_toogle_skip_off' : 'tt_toogle_skip_on'}
      />
    </div>
  );
};

export default ToogleSkip;
