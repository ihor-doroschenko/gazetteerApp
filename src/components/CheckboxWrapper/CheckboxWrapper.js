import { Checkbox } from 'antd';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';

// Wrapper component to contain checkbox from antdesign with respective tooltip

const CheckboxWrapper = ({
  optionName,
  id = optionName,
  value,
  callback,
  tooltipText,
  customElement,
}) => {
  return (
    <Checkbox id={id} value={optionName} checked={value} onChange={callback}>
      <TooltipContainer placement='right' text={tooltipText} customElement={customElement} />
    </Checkbox>
  );
};
export default CheckboxWrapper;
