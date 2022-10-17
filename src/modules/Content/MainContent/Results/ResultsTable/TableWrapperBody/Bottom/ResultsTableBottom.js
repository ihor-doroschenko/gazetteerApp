import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import { filterDetailsByGazName } from 'utils/Helpers/TableHelpers/filterDetailsByGazName';
import GazetteerResultsHead from '../GazetteerResultsHead/GazetteerResultsHead';
import TableBodyContainer from '../TableBodyContainer/TableBodyContainer';
import ResultsTableBottomViewClasses from './ResultsTableBottomView.module.css';

const ResultsTableBottom = ({ data, details, key }) => {
  const filteredDetails = filterDetailsByGazName(details, data.gazName);
  return (
    <div className={ResultsTableBottomViewClasses.wrapBottomTable} key={key}>
      <div className={ResultsTableBottomViewClasses.gazNamesBottomTable}>
        <GazetteerResultsHead original={data} />
      </div>
      <TableBodyContainer
        actualState={data.actualState}
        details={filteredDetails}
        color={data.color}
        gazName={data.gazName}
        entries={data.types}
      />
    </div>
  );
};

export default withReactMemo(ResultsTableBottom);
