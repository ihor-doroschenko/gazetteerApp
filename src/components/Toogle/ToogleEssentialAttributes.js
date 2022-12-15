import { faListUl, faTasks } from '@fortawesome/free-solid-svg-icons';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';

// Wrapper component to contain switcher to show/hide only essential attributes of the entity in the detail table

const ToogleEssentialAttributes = ({ isEssential, callback }) => {
  return (
    <div onClick={callback}>
      <TooltipContainer
        placement='left'
        icon={isEssential ? faListUl : faTasks}
        text={isEssential ? 'tt_toogle_essential_off' : 'tt_toogle_essential_on'}
      />
    </div>
  );
};

export default ToogleEssentialAttributes;
