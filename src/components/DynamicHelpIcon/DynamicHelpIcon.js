import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import DynamicHelpIconClasses from './DynamicHelpIcon.module.css';

const DynamicHelpIcon = ({ title }) => {
  return (
    <a
      className={DynamicHelpIconClasses.icon}
      href={`https://vhrz1355.hrz.uni-marburg.de/meta.html#help_${title.toLowerCase()}_area`}>
      <TooltipContainer
        placement='left'
        text={`tt_go_to_the_help_section_for_${title.toLowerCase()}`}
        icon={faQuestionCircle}
        delay={true}
      />
    </a>
  );
};
export default withReactMemo(DynamicHelpIcon);
