import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withReactMemo } from 'HOCs/withReactMemo';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTypeFilterValues } from 'redux/filter-reducer';
import { getGazetteerFilterTypesValues } from 'selectors/reselectors/simple-reselectors';
import { getTypeFilterValues } from 'selectors/simple-selectors/filter-selectors';
import FilterTypeClasses from './FilterType.module.css';

const FilterType = ({ gazName }) => {
  const dispatch = useDispatch();
  const types = useSelector(state => getGazetteerFilterTypesValues(state, gazName));
  const typeFilterValues = useSelector(getTypeFilterValues);

  const filterValue = typeFilterValues.find(el => el.gazetteer === gazName);

  const [state, setState] = useState(filterValue ? filterValue.values.value : '');

  const typelessGazetteer = (!types || types.length === 0) && true;
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
