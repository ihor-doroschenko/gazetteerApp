import { AutoComplete } from 'antd';
import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setNameFilterValues } from 'redux/filter-reducer';

// Component to contain filter for the subtables in the results table that filters entities by name (based on antdesign autocomplete)

const FilterName = ({ filter, gazName }) => {
  const dispatch = useDispatch();
  return (
    <AutoComplete
      value={filter ? filter.value : ''}
      onChange={value =>
        dispatch(setNameFilterValues({ id: 'name', value: value }, gazName, 'nameFilterValues'))
      }
      onKeyPress={e => e.key === 'Enter'}
      allowClear={true}
      placeholder='filter phrase'
    />
  );
};

export default withReactMemo(FilterName);
