import classNames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterOnlyMatchedResults } from 'redux/matching-reducer';
import { getIsMatched } from 'selectors/simple-selectors/matching-selectors';
import ToogleMatchings from '../../Toogle/ToogleMatchings';
import FilterResultsOnlyWithMatchingsClasses from './FilterResultsOnlyWithMatchings.module.css';

// Component wrapper to contain tool to filter only those results that have matchings

const FilterResultsOnlyWithMatchings = props => {
  const onlyMatchedResults = useSelector(getIsMatched);
  const dispatch = useDispatch();
  return (
    <div className={classNames('borderBottom', FilterResultsOnlyWithMatchingsClasses.wrapper)}>
      <ToogleMatchings
        onlyMatchedResults={onlyMatchedResults}
        callback={() => dispatch(filterOnlyMatchedResults(!onlyMatchedResults))}
        offTooltip='tt_filter_off'
        onTooltip='tt_filter_on'
      />
    </div>
  );
};

export default FilterResultsOnlyWithMatchings;
