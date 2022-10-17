import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';

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
