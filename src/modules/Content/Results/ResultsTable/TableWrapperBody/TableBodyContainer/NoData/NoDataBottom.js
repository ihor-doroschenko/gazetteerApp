import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import { getResults } from 'selectors/reselectors/getResults';
import { getEmptyTablesInBottomView } from 'utils/Helpers/TableHelpers/getEmptyTablesInBottomView';
import ResultsTableBottomViewClasses from '../../Bottom/ResultsTableBottomView.module.css';
import NoDataClasses from './NoData.module.css';

const NoDataBottom = props => {
  const data = useSelector(getResults);
  const emptyTablesInBottomView = getEmptyTablesInBottomView(data);

  return (
    <div
      className={classNames(
        ResultsTableBottomViewClasses.wrapBottomTable,
        ResultsTableBottomViewClasses.wrapBottomTableNoData
      )}>
      <div className={NoDataClasses.wrapperBottom}>
        <div>No data for given name for:</div>
        <ul> {emptyTablesInBottomView}</ul>
      </div>
    </div>
  );
};

export default NoDataBottom;
