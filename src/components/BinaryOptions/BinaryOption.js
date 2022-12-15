import { Checkbox, Form } from 'antd';
import classNames from 'classnames';
import CheckboxWrapper from 'components/CheckboxWrapper/CheckboxWrapper';
import React from 'react';
import { useDispatch } from 'react-redux';
import BinaryOptionClasses from './BinaryOption.module.css';

// Wrapper component to contain checkbox group from antdesign for binary logic

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
          <CheckboxWrapper
            optionName={optionName}
            value={value}
            callback={e => dispatch(callback(e.target.checked))}
            tooltipText={tooltipText}
            customElement={<p style={{ cursor: 'pointer' }}>{optionName}</p>}
          />
        </Checkbox.Group>
      </Form.Item>
    </div>
  );
};

export default BinaryOption;
