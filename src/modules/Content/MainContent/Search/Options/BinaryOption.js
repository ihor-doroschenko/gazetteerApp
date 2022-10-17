import { Checkbox, Form } from 'antd';
import classNames from 'classnames';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import { useDispatch } from 'react-redux';
import BinaryOptionClasses from './BinaryOption.module.css';

const BinaryOption = ({ tooltipText, optionName, callback, value, resized }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={classNames(BinaryOptionClasses.optionsWrapper, {
        [BinaryOptionClasses.optionsResizedWrapper]: resized,
        [BinaryOptionClasses.radioOptionsContainer]: resized,
      })}>
      <Form.Item name={`options_for_${optionName}`}>
        <Checkbox.Group className={BinaryOptionClasses.checkboxOptions}>
          <Checkbox
            value={optionName}
            checked={value}
            onChange={e => dispatch(callback(e.target.checked))}>
            <TooltipContainer
              placement='right'
              text={tooltipText}
              customElement={<p style={{ cursor: 'pointer' }}>{optionName}</p>}
            />
          </Checkbox>
        </Checkbox.Group>
      </Form.Item>
    </div>
  );
};

export default BinaryOption;
