import { usePrevious } from 'Hooks/usePrevious';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-table-6/react-table.css';
import { mouseClickClear } from 'redux/map-interaction-reducer';
import { getDetails } from 'selectors/simple-selectors/details-selectors';
import { getTableStateExpanded } from 'selectors/simple-selectors/table-state-selectors';
import { autoScroll } from 'utils/Autoscroll/AutoScrollTools';
import { getDifferenceArraysOfObjects } from 'utils/Filtering/getDifferenceArraysOfObjects';
import { getColumnsForSideView } from 'utils/Helpers/Columns/getColumnsForSideView';
import ResultsTableSide from './ResultsTableSide';

const ResultsTableSideFunctionalContainer = props => {
  const dispatch = useDispatch();
  const tableStateExpanded = useSelector(getTableStateExpanded);
  const details = useSelector(getDetails);
  const previousDetails = usePrevious(details);

  const [columns, setColumns] = useState([]);
  const [referencesState, setReferencesState] = useState({});
  const references = {};

  const getOrCreateRef = gazName => {
    if (!references.hasOwnProperty(gazName)) {
      references[gazName] = React.createRef();
    }
    return references[gazName];
  };
  const handleAutoScroll = gazName => {
    const params = {
      ref: referencesState[gazName],
      mainTable: true,
      mouseClickClear: () => dispatch(mouseClickClear()),
    };
    autoScroll(params);
  };

  useEffect(() => {
    setColumns(getColumnsForSideView(getOrCreateRef));
    setReferencesState(references);
  }, []);
  useEffect(() => {
    if (previousDetails) {
      const results = getDifferenceArraysOfObjects(details, previousDetails);
      if (results.length !== 0) {
        handleAutoScroll(results[0].gazName);
      }
    }
  }, [details]);

  return (
    <ResultsTableSide
      columns={columns}
      expanded={tableStateExpanded}
      details={details}
      handleAutoScroll={handleAutoScroll}
    />
  );
};

export default ResultsTableSideFunctionalContainer;
