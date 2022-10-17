import { Form } from 'antd';
import { useDidMountEffectInSearch } from 'Hooks/useDidMountEffectInSearch';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSearch } from 'redux/search-reducer';
import { getGazetteers } from 'selectors/simple-selectors/search-selectors';
import { validateDatabasesInput } from 'utils/validators/InputValidators/validateDatabasesInput';
import { validateSearchInputLetters } from 'utils/validators/InputValidators/validateSearchInputLetters';
import Search from './Search';

const SearchContainer = props => {
  const [isNoPlaceName, setIsNoPlaceName] = useState(false);
  const [isInvalidPlaceName, setIsInvalidPlaceName] = useState(false);
  const [isNoDatabase, setIsNoDatabase] = useState(false);
  const dispatch = useDispatch();
  const gazetteers = useSelector(getGazetteers);
  const defaultCheckedList = gazetteers.filter(g => g.value).map(g => g.gazName);
  const [form] = Form.useForm();

  useDidMountEffectInSearch(form.setFieldsValue);

  const onFinish = ({ databases, placename }) => {
    if (!validateSearchInputLetters(placename)) {
      setIsInvalidPlaceName(true);
    }
    if (!validateDatabasesInput(databases)) {
      setIsNoDatabase(true);
    }
    if (validateSearchInputLetters(placename) && validateDatabasesInput(databases)) {
      dispatch(startSearch(databases, placename));
    }
  };
  return (
    <Search
      form={form}
      onFinish={onFinish}
      isNoPlaceName={isNoPlaceName}
      isInvalidPlaceName={isInvalidPlaceName}
      setIsNoPlaceName={setIsNoPlaceName}
      setIsInvalidPlaceName={setIsInvalidPlaceName}
      setIsNoDatabase={setIsNoDatabase}
      isNoDatabase={isNoDatabase}
      defaultCheckedList={defaultCheckedList}
    />
  );
};

export default SearchContainer;
