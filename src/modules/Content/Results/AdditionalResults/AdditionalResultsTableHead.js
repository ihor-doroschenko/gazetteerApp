import { faAngleRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import DynamicHelpIcon from 'components/DynamicHelpIcon/DynamicHelpIcon';
import ExportContainer from 'components/Export/ExportContainer';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import { withReactMemo } from 'HOCs/withReactMemo';
import ResultsTableHeadClasses from 'modules/Content/Results/ResultsTable/ResultsTableHead/ResultsTableHead.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getSwitchViewTooltipText } from 'utils/TextHandlers/getSwitchViewTooltipText';

// Wrapper component to contain tools in head of the additional table (compare and/or matchings)

const AdditionalResultsTableHead = ({ close, value, switchValue, title, data, headers }) => {
  const dispatch = useDispatch();
  const switchTooltipText = getSwitchViewTooltipText({ value, title });
  return (
    <div className={classNames('borderBottom', ResultsTableHeadClasses.results)}>
      <div className={ResultsTableHeadClasses.titleWrapper} onClick={switchValue}>
        <TooltipContainer
          placement='left'
          icon={faAngleRight}
          text={switchTooltipText}
          delay={true}
        />
      </div>
      <div className={ResultsTableHeadClasses.titleWrapper}>
        <p className='smallHeaders'>{title} table</p>
      </div>
      <div className={ResultsTableHeadClasses.titleWrapper}>
        <DynamicHelpIcon title={title} />
        <ExportContainer
          jsonEntries={data}
          entries={data}
          headers={headers}
          filename={`entries-from-${title}-exported`}
        />
        <div onClick={() => dispatch(close())}>
          <TooltipContainer
            placement='left'
            text='tt_close_all_results'
            icon={faTimes}
            delay={true}
          />
        </div>
      </div>
    </div>
  );
};

export default withReactMemo(AdditionalResultsTableHead);
