import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withReactMemo } from 'HOCs/withReactMemo';
import { useFilterType } from 'Hooks/Filter/useFilterType';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTypeFilterValues } from 'redux/filter-reducer';
import FilterTypeClasses from './FilterType.module.css';

// Component to contain filter for the subtables in the results table that filters entities by type. Filter is based on form elements from the material-ui

const FilterType = ({ gazName }) => {
  const dispatch = useDispatch();
  const { types, filterValue, typelessGazetteer } = useFilterType(gazName);
  const [state, setState] = useState(filterValue ? filterValue.values.value : '');
  const handleChange = event => {
    setState(event.target.value);
    dispatch(setTypeFilterValues({ id: 'type', value: event.target.value }, gazName));
  };
  return (
    <FormControl variant='outlined' size='small' disabled={typelessGazetteer}>
      <Select
        inputProps={{ 'aria-label': 'Without label' }}
        value={state}
        displayEmpty
        onChange={handleChange}
        className={FilterTypeClasses.select}>
        <MenuItem value=''>
          <p className={FilterTypeClasses.noType}>
            {typelessGazetteer ? 'No types provided' : 'select a type'}
          </p>
        </MenuItem>
        {types.map(el => (
          <MenuItem key={el} value={el}>
            {el}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default withReactMemo(FilterType);
