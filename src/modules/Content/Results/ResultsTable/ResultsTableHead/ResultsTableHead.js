import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import FilterResultsOnlyWithMatchings from 'components/Filter/FilterResultsOnlyWithMatchings/FilterResultsOnlyWithMatchings';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchResultsHidden } from 'redux/nav-reducer';
import {
  getIsMatching,
  getIsResultsHidden,
  getIsSideSwitched,
} from 'selectors/simple-selectors/nav-selectors';
import { getSearchedText, getStatus } from 'selectors/simple-selectors/results-selectors';
import { validateStatus } from 'utils/validators/PropertyValidators/validateStatus';
import ResultsTableHeadClasses from './ResultsTableHead.module.css';
import ResultsTableHeadTools from './ResultsTableHeadTools';

// Wrapper component to contain head for the main results tables

const ResultsTableHead = props => {
  const isSideSwitched = useSelector(getIsSideSwitched);
  const searchedText = useSelector(getSearchedText);
  const isMatching = useSelector(getIsMatching);
  const isResultsHidden = useSelector(getIsResultsHidden);
  const status = useSelector(getStatus);
  const dispatch = useDispatch();
  return (
    <>
      <div className={classNames('borderBottom', ResultsTableHeadClasses.results)}>
        {!isSideSwitched && (
          <div onClick={() => dispatch(switchResultsHidden(!isResultsHidden))}>
            <TooltipContainer
              placement='left'
              icon={faAngleRight}
              text='tt_results_switcher_off'
              delay={true}
            />
          </div>
        )}
        <div style={{ flex: isSideSwitched && '1 1 95%' }}>
          <p className='smallHeaders'>Results for {searchedText} </p>
        </div>
        <div style={{ flex: isSideSwitched && '1 1 5%' }}>
          <ResultsTableHeadTools validatedStatus={validateStatus(status)} />
        </div>
      </div>
      {isMatching && <FilterResultsOnlyWithMatchings />}
    </>
  );
};

export default ResultsTableHead;
