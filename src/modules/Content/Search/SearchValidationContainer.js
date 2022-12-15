import { Form } from 'antd';
import { useDidMountEffectInSearch } from 'Hooks/useDidMountEffectInSearch';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startSearch } from 'redux/search-reducer';
import { validateGazetteersInput } from 'utils/validators/InputValidators/validateGazetteersInput';
import { validatePlaceNameInput } from 'utils/validators/InputValidators/validatePlaceNameInput';
import SearchResizingContainer from './SearchResizingContainer';

// Wrapper component to create a form in search area and to provide validation for it

const SearchValidationContainer = props => {
  const [isNoPlaceName, setIsNoPlaceName] = useState(false);
  const [isInvalidPlaceName, setIsInvalidPlaceName] = useState(false);
  const [isNoDatabase, setIsNoDatabase] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useDidMountEffectInSearch(form.setFieldsValue);

  const onFinish = ({ databases, placename }) => {
    if (!validatePlaceNameInput(placename)) {
      setIsInvalidPlaceName(true);
    }
    if (!validateGazetteersInput(databases)) {
      setIsNoDatabase(true);
    }
    if (validatePlaceNameInput(placename) && validateGazetteersInput(databases)) {
      dispatch(startSearch(databases, placename));
    }
  };
  return (
    <SearchResizingContainer
      form={form}
      onFinish={onFinish}
      isNoPlaceName={isNoPlaceName}
      isInvalidPlaceName={isInvalidPlaceName}
      setIsNoPlaceName={setIsNoPlaceName}
      setIsInvalidPlaceName={setIsInvalidPlaceName}
      setIsNoDatabase={setIsNoDatabase}
      isNoDatabase={isNoDatabase}
    />
  );
};

export default SearchValidationContainer;
