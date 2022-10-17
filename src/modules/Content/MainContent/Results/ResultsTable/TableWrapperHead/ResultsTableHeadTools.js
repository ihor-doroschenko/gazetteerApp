import { faThList, faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import DynamicHelpIcon from 'components/DynamicHelpIcon/DynamicHelpIcon';
import ExportContainer from 'components/Export/ExportContainer';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import { withReactMemo } from 'HOCs/withReactMemo';
import { useResultsDataToExport } from 'Hooks/Export/useResultsDataToExport';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeResults, switchView } from 'redux/nav-reducer';
import { getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import TableWrapperHeadClasses from './TableWrapperHead.module.css';

const ResultsTableHeadTools = ({ validatedStatus }) => {
  const isSideSwitched = useSelector(getIsSideSwitched);
  const { resultsDataToExport, headers } = useResultsDataToExport();
  const dispatch = useDispatch();

  return (
    <div
      className={classNames(TableWrapperHeadClasses.tableTools, {
        [TableWrapperHeadClasses.switchBottomIcon]: !isSideSwitched,
      })}>
      <DynamicHelpIcon title='results' />
      <ExportContainer
        entries={resultsDataToExport}
        jsonEntries={resultsDataToExport}
        headers={headers}
        filename={`entries-from-results-exported`}
      />
      <div onClick={() => validatedStatus && dispatch(switchView(!isSideSwitched))}>
        <TooltipContainer
          placement='left'
          text='tt_change_view'
          icon={faThList}
          delay={true}
          disabled={validatedStatus ? false : true}
        />
      </div>
      <div onClick={() => validatedStatus && dispatch(closeResults())}>
        <TooltipContainer
          placement='left'
          text='tt_close_all_results'
          icon={faTimes}
          delay={true}
          disabled={validatedStatus ? false : true}
        />
      </div>
    </div>
  );
};

export default withReactMemo(ResultsTableHeadTools);
