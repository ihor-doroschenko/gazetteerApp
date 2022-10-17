import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import { getResults } from 'selectors/reselectors/getResults';
import ResultsTableBottomViewClasses from '../../Bottom/ResultsTableBottomView.module.css';
import NoDataClasses from './NoData.module.css';

const NoDataBottom = props => {
  const data = useSelector(getResults);
  const bottomTablesNoData = data
    .filter(d => d.actualState === 'noData')
    .map((data, index) => <li key={index}>{data.gazName}</li>);

  return (
    <>
      {bottomTablesNoData.length !== 0 && (
        <div
          className={classNames(
            ResultsTableBottomViewClasses.wrapBottomTable,
            ResultsTableBottomViewClasses.wrapBottomTableNoData
          )}>
          <div className={NoDataClasses.wrapperBottom}>
            <div>No data for given name for:</div>
            <ul> {bottomTablesNoData}</ul>
          </div>
        </div>
      )}
    </>
  );
};

export default NoDataBottom;
