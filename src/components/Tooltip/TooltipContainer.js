import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from 'antd';
import classNames from 'classnames';
import parse from 'html-react-parser';
import React from 'react';
import { getTooltipTextes } from 'utils/Helpers/Tooltip/getTooltipTextes';
import NewTooltipClasses from './TooltipContainer.module.css';

const TooltipContainer = ({ placement, icon, text, customElement, delay, styleProp, disabled }) => {
  return (
    <Tooltip
      title={parse(getTooltipTextes(text, 'en'))}
      placement={placement}
      mouseEnterDelay={delay ? 0.5 : 0}
      mouseLeaveDelay={0}
      color='rgba(0, 0, 0, 0.7)'
      overlayInnerStyle={{
        fontSize: '0.9rem',
        display: 'flex',
        alignItems: 'center',
      }}
      overlayStyle={{ maxWidth: '300px' }}>
      {icon ? (
        <FontAwesomeIcon
          icon={icon}
          className={classNames(NewTooltipClasses.icon, NewTooltipClasses.cursor, {
            [styleProp]: styleProp,
            [NewTooltipClasses.disabled]: disabled,
          })}
        />
      ) : (
        <div className={NewTooltipClasses.cursor}>{customElement}</div>
      )}
    </Tooltip>
  );
};

export default TooltipContainer;
