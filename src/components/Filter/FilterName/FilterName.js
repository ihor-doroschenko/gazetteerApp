import { AutoComplete } from 'antd';
import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setNameFilterValues } from 'redux/filter-reducer';

const FilterName = props => {
  const dispatch = useDispatch();
  return (
    <AutoComplete
      value={props.filter ? props.filter.value : ''}
      onChange={value => dispatch(setNameFilterValues({ id: 'name', value: value }, props.gazName))}
      onKeyPress={e => e.key === 'Enter'}
      allowClear={true}
      placeholder='filter phrase'
    />
  );
};

export default withReactMemo(FilterName);
