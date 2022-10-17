import { Radio } from 'antd';
import 'antd/lib/radio/style/index.css';
import classNames from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deselectAllGazetteers, selectAllGazetteers } from 'redux/search-reducer';
import DatabasesClasses from './Databases.module.css';

const SelectDeselect = ({ setIsNoDatabase, resized }) => {
  const dispatch = useDispatch();
  const onChange = e => {
    if (e.target.value === 'select') {
      dispatch(selectAllGazetteers());
      setIsNoDatabase(false);
    } else {
      dispatch(deselectAllGazetteers());
    }
  };
  return (
    <Radio.Group
      onChange={onChange}
      size={resized && 'small'}
      className={classNames({ [DatabasesClasses.resizedSelectAllGroup]: resized })}>
      <Radio.Button value='select'>Select All</Radio.Button>
      <Radio.Button value='deselect'>Deselect All</Radio.Button>
    </Radio.Group>
  );
};

export default SelectDeselect;
