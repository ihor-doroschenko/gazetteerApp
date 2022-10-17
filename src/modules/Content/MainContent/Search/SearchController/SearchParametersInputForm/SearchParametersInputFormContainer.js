import { Form } from 'antd';
import classNames from 'classnames';
import React from 'react';
import SearchParametersInputClasses from './SearchParametersInput.module.css';
import SearchParametersInputForm from './SearchParametersInputForm';

const SearchParametersInputFormContainer = ({
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
          ? 'Please input a place name!'
          : isInvalidPlaceName && 'Please use valid letters and symbols!'
      }
      onChange={() => {
        setIsNoPlaceName(false);
        setIsInvalidPlaceName(false);
      }}
      className={classNames({ [SearchParametersInputClasses.resizedInputField]: resized })}>
      <SearchParametersInputForm />
    </Form.Item>
  );
};

export default SearchParametersInputFormContainer;
