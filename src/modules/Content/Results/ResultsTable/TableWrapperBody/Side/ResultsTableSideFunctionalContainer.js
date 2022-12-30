import { useAutoScrollForResultsSide } from 'Hooks/RightResults/useAutoScrollForResultsSide';
import { useColumnsForResultsSide } from 'Hooks/RightResults/useColumnsForResultsSide';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-table-6/react-table.css';
import { mouseClickMarkerToInitial } from 'redux/map-interaction-reducer';
import { getTableStateExpanded } from 'selectors/simple-selectors/table-state-selectors';
import { autoScrollWrapper } from 'utils/Autoscroll/autoScrollWrapper';
import ResultsTableSide from './ResultsTableSide';

// Wrapper to contain functionalities to handle autoscroll of the results table in side view. The wrapper is of the first order for the ResultsTableSide component

const ResultsTableSideFunctionalContainer = props => {
  const dispatch = useDispatch();
  const expanded = useSelector(getTableStateExpanded);
  const references = {};

  const getOrCreateRef = gazName => {
    if (!references.hasOwnProperty(gazName)) {
      references[gazName] = React.createRef();
    }
    return references[gazName];
  };
  const { referencesState, columns } = useColumnsForResultsSide(getOrCreateRef, references);
  const handleAutoScroll = gazName => {
    const params = {
      ref: referencesState[gazName],
      mainTable: true,
      mouseClickMarkerToInitial: () => dispatch(mouseClickMarkerToInitial()),
    };
    autoScrollWrapper(params);
  };
  useAutoScrollForResultsSide(handleAutoScroll);

  return (
    <ResultsTableSide columns={columns} handleAutoScroll={handleAutoScroll} expanded={expanded} />
  );
};

export default ResultsTableSideFunctionalContainer;
