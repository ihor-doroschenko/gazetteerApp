import classNames from 'classnames';
import { defaultCompareColumnSize } from 'constants/numericConstants';
import { withReactMemo } from 'HOCs/withReactMemo';
import { useCompareTableColumns } from 'Hooks/Compare/useCompareTableColumns';
import { useCompareTableData } from 'Hooks/Compare/useCompareTableData';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-table-6/react-table.css';
import { closeCompareTable } from 'redux/compare-reducer';
import { switchAdditionalResult } from 'redux/nav-reducer';
import { getEntitiesToCompare } from 'selectors/simple-selectors/compare-selectors';
import { getIsCompareHidden } from 'selectors/simple-selectors/nav-selectors';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { getHeadersForCompareExport } from 'utils/Exporting/getHeadersForCompareExport';
import AdditionalResultsTableHead from '../../AdditionalResultsTableHead';
import CompareTableClasses from './CompareTable.module.css';
import CompareColumnsWrapper from './CompareTableElements/CompareColumnsWrapper/CompareColumnsWrapper';
import CompareTableHeaderColumn from './CompareTableElements/CompareTableHeaderColumn/CompareTableHeaderColumn';

// Wrapper component to compare different entities, e.g. their attributes - structure, attribute names, values, etc. Added entities are compared in "raw" format, so as they appear in respective gazetteers. Original names of attributes are shown in brackets below the attribute values. It will appear to the left of the results window as separate window.

const CompareTable = props => {
  const dispatch = useDispatch();
  const customRef = useRef();
  const [columnWidth, setColumnWidth] = useState(defaultCompareColumnSize);
  const isCompareHidden = useSelector(getIsCompareHidden);
  const entitiesToCompare = useSelector(getEntitiesToCompare);
  const { data, dataForExport } = useCompareTableData(entitiesToCompare);
  const { headerCol } = useCompareTableColumns();

  return (
    <div className={classNames({ [CompareTableClasses.wrapper]: isCompareHidden })}>
      <div>
        <AdditionalResultsTableHead
          close={closeCompareTable}
          value={isCompareHidden}
          switchValue={() => dispatch(switchAdditionalResult(!isCompareHidden, true))}
          title='Compare'
          data={Array.from(dataForExport)}
          headers={getHeadersForCompareExport()}
        />
      </div>
      <div
        className={CompareTableClasses.columnsWrapper}
        style={{ gridTemplateColumns: `${columnWidth}px auto` }}>
        <CompareTableHeaderColumn
          setColumnWidth={setColumnWidth}
          columnWidth={columnWidth}
          data={data}
          customRef={customRef}
          headerCol={headerCol}
        />
        <CompareColumnsWrapper customRef={customRef} />
      </div>
    </div>
  );
};

export default withReactMemo(CompareTable);
