import Expander from 'components/Expander/Expander.js';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import { setStateOfExpandedOfAGazetteer } from 'redux/table-state-reducer';
import { getResults } from 'selectors/reselectors/getResults';
import { getIsMatching } from 'selectors/simple-selectors/nav-selectors';
import { getResultsWidth } from 'selectors/simple-selectors/table-state-selectors';
import { replaceKeysByIndexes } from 'utils/Replacing/replaceKeysByIndexes';
import { getResultsTableSideMaxHeight } from 'utils/Styling/MainTable/getResultsTableSideMaxHeight';
import { styleBottomBorder } from 'utils/Styling/MainTable/styleBottomBorder.js';
import { styleHead } from 'utils/Styling/MainTable/styleHead.js';
import TableBodyContainer from '../TableBodyContainer/TableBodyContainer';

// Wrapper component to contain results subtable in side view. It includes subtable head and subtable body

const ResultsTableSide = ({ expanded, columns, handleAutoScroll }) => {
  const dispatch = useDispatch();
  const data = useSelector(getResults);
  const isMatching = useSelector(getIsMatching);
  const resultsSideWidth = useSelector(getResultsWidth);
  return (
    <ReactTable
      data={data}
      columns={columns}
      expanded={replaceKeysByIndexes(expanded)}
      pageSize={Object.keys(data).length}
      showPagination={false}
      sortable={false}
      style={{ maxHeight: getResultsTableSideMaxHeight(isMatching), width: resultsSideWidth }}
      onExpandedChange={(newExpanded, index) => {
        const gazName = data[index].gazName;
        dispatch(setStateOfExpandedOfAGazetteer(gazName, !expanded[gazName]));
      }}
      SubComponent={({ original }) => {
        return <TableBodyContainer gazName={original.gazName} />;
      }}
      ExpanderComponent={({ original }) => (
        <Expander handleAutoScroll={handleAutoScroll} gazName={original.gazName} />
      )}
      getTheadThProps={table => styleHead()}
      getTrGroupProps={(row, rowInfo) => styleBottomBorder(rowInfo.index, data.length)}
    />
  );
};

export default ResultsTableSide;
