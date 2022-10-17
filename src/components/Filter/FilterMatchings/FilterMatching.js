import classNames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterMatchings } from 'redux/matching-reducer';
import { getIsMatched } from 'selectors/simple-selectors/matching-selectors';
import ToogleMatchings from '../../Toogle/ToogleMatchings';
import FilterMatchingsClasses from './FilterMatchings.module.css';

const FilterMatchings = props => {
  const isMatched = useSelector(getIsMatched);
  const dispatch = useDispatch();
  return (
    <div className={classNames('borderBottom', FilterMatchingsClasses.wrapper)}>
      <ToogleMatchings
        isMatched={isMatched}
        callback={() => dispatch(filterMatchings(!isMatched))}
        offTooltip='tt_filter_off'
        onTooltip='tt_filter_on'
      />
    </div>
  );
};

export default FilterMatchings;
