import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import classNames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import MatchingsTableToolClasses from './MatchingsTableTool.module.css';

const MatchingsTableFilter = ({ values, value, onChangeCallback }) => {
  const isSideSwitched = useSelector(getIsSideSwitched);
  const dispatch = useDispatch();
  return (
    <FormControl variant='outlined' size='small'>
      <Select
        defaultValue={Object.keys(values)[0]}
        value={value}
        onChange={event => {
          dispatch(onChangeCallback(event.target.value));
        }}
        inputProps={{ 'aria-label': 'Without label' }}
        className={classNames(MatchingsTableToolClasses.select, {
          [MatchingsTableToolClasses.selectSmallBottom]: isSideSwitched,
        })}>
        {Object.keys(values).map(key => (
          <MenuItem value={key}>{values[key]}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MatchingsTableFilter;
