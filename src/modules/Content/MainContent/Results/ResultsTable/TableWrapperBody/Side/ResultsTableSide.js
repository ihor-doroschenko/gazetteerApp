import Expander from 'components/Expander/Expander.js';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import { setStateOfExpandedOfAGazetteer } from 'redux/table-state-reducer';
import { getResults } from 'selectors/reselectors/getResults';
import { getIsMatching } from 'selectors/simple-selectors/nav-selectors';
import { filterDetailsByGazName } from 'utils/Helpers/TableHelpers/filterDetailsByGazName';
import { replaceKeysByIndexes } from 'utils/Replacing/replaceKeysByIndexes';
import { getResultsTableSideMaxHeight } from 'utils/Styling/MainTable/getResultsTableSideMaxHeight';
import { styleBottomBorder } from 'utils/Styling/MainTable/styleBottomBorder.js';
import { styleHead } from 'utils/Styling/MainTable/styleHead.js';
import TableBodyContainer from '../TableBodyContainer/TableBodyContainer';

const ResultsTableSide = ({ details, columns, expanded, handleAutoScroll }) => {
  const dispatch = useDispatch();
  const data = useSelector(getResults);
  const isMatching = useSelector(getIsMatching);
  return (
    <ReactTable
      data={data}
      columns={columns}
      expanded={replaceKeysByIndexes(expanded)}
      pageSize={Object.keys(data).length}
      showPagination={false}
      sortable={false}
      style={{ maxHeight: getResultsTableSideMaxHeight(isMatching) }}
      onExpandedChange={(newExpanded, index) => {
        const gazName = data[index].gazName;
        dispatch(setStateOfExpandedOfAGazetteer(gazName, !expanded[gazName]));
      }}
      SubComponent={row => {
        const filteredDetails = filterDetailsByGazName(details, row.original.gazName);
        return (
          <TableBodyContainer
            actualState={row.original.actualState}
            details={filteredDetails}
            gazName={row.original.gazName}
            color={row.original.color}
            entries={row.original.types}
          />
        );
      }}
      ExpanderComponent={props => (
        <Expander
          expanded={expanded}
          handleAutoScroll={handleAutoScroll}
          gazName={props.original.gazName}
        />
      )}
      getTheadThProps={table => styleHead()}
      getTrGroupProps={(row, rowInfo) => styleBottomBorder(rowInfo.index, data.length)}
    />
  );
};

export default ResultsTableSide;
