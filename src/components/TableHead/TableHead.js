import { faAngleRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import DynamicHelpIcon from 'components/DynamicHelpIcon/DynamicHelpIcon';
import ExportContainer from 'components/Export/ExportContainer';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import { useDispatch } from 'react-redux';
import TableWrapperHeadClasses from '../../modules/Content/MainContent/Results/ResultsTable/TableWrapperHead/TableWrapperHead.module.css';

const TableHead = ({ close, value, switchValue, title, data, headers }) => {
  const dispatch = useDispatch();
  return (
    <div className={classNames('borderBottom', TableWrapperHeadClasses.results)}>
      <div
        className={TableWrapperHeadClasses.titleWrapper}
        onClick={() => dispatch(switchValue(!value))}>
        <TooltipContainer
          placement='left'
          icon={faAngleRight}
          text='tt_results_switcher_off'
          delay={true}
        />
      </div>
      <div className={TableWrapperHeadClasses.titleWrapper}>
        <p className='smallHeaders'>{title} table</p>
      </div>
      <div className={TableWrapperHeadClasses.titleWrapper}>
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

export default withReactMemo(TableHead);
