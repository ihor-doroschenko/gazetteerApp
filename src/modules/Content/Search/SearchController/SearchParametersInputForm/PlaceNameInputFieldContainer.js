import { Form } from 'antd';
import classNames from 'classnames';
import React from 'react';
import PlaceNameInputField from './PlaceNameInputField';
import SearchParametersInputClasses from './SearchParametersInput.module.css';

// Wrapper component to contain validation messages, events and styles for the input field

const PlaceNameInputFieldContainer = ({
  isNoPlaceName,
  isInvalidPlaceName,
  setIsNoPlaceName,
  setIsInvalidPlaceName,
  resized,
}) => {
  return (
    <Form.Item
      name='placename'
      validateStatus={isNoPlaceName || isInvalidPlaceName ? 'error' : 'success'}
      help={
        isNoPlaceName
          ? 'Please input a place name'
          : isInvalidPlaceName && 'Please use valid letters and symbols'
      }
      onChange={() => {
        setIsNoPlaceName(false);
        setIsInvalidPlaceName(false);
      }}
      className={classNames({ [SearchParametersInputClasses.resizedInputField]: resized })}>
      <PlaceNameInputField />
    </Form.Item>
  );
};

export default PlaceNameInputFieldContainer;
