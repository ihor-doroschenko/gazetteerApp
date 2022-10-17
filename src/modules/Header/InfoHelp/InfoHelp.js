import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import InfoHelpClasses from '../Header.module.css';

const InfoHelp = () => {
  return (
    <div className={InfoHelpClasses.infoHelp}>
      <a href='https://vhrz1355.hrz.uni-marburg.de/meta.html'>
        <p>Info/Help</p>
        <TooltipContainer
          placement='left'
          icon={faInfoCircle}
          text='tt_go_to_InfoHelp'
          delay={true}
        />
      </a>
    </div>
  );
};

export default InfoHelp;
