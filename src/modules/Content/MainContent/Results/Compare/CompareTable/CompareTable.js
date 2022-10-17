import classNames from 'classnames';
import TableHead from 'components/TableHead/TableHead';
import { getAbstractMetaAttributes } from 'constants/getAbstractMetaAttributes';
import { getDefaultDimensions } from 'constants/getDefaultDimensions';
import { withReactMemo } from 'HOCs/withReactMemo';
import { useCompareTableColumns } from 'Hooks/Compare/useCompareTableColumns';
import { useCompareTableData } from 'Hooks/Compare/useCompareTableData';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { ResizableBox } from 'react-resizable';
import 'react-table-6/react-table.css';
import { closeCompareTable } from 'redux/compare-reducer';
import { switchCompareTable } from 'redux/nav-reducer';
import { getEntitiesToCompare } from 'selectors/simple-selectors/compare-selectors';
import { getIsCompareHidden } from 'selectors/simple-selectors/nav-selectors';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import CompareTableClasses from './CompareTable.module.css';
import CompareColumn from './CompareTableElements/CompareColumnsWrapper/CompareColumn/CompareColumn';
import CompareColumnsWrapper from './CompareTableElements/CompareColumnsWrapper/CompareColumnsWrapper';

/**
 * The table allows to compare different entities, e.g. their attributes - structure, attribute names, values, etc. Added entities are compared in "raw" format, so as they appear in respective gazetteers. Original names of attributes are shown in brackets below the attribute values.
 * It will appear to the left of the results window as separate window.
 * There is a possibility to export added entities.
 * Any number of entities can be added.
 *
 * This component does not take any props.
 */

const CompareTable = props => {
  const customRef = useRef();
  const compareColumnSize = getDefaultDimensions('compareColumnSize');
  const [attributeColumnWidth, setAttributeColumnWidth] = useState(compareColumnSize);
  const isCompareHidden = useSelector(getIsCompareHidden);
  const entitiesToCompare = useSelector(getEntitiesToCompare);

  const { data, dataForExport } = useCompareTableData(entitiesToCompare);
  const { headerCol } = useCompareTableColumns();

  return (
    <div className={classNames({ [CompareTableClasses.wrapper]: isCompareHidden })}>
      <div>
        <TableHead
          close={closeCompareTable}
          value={isCompareHidden}
          switchValue={switchCompareTable}
          title='Compare'
          data={Array.from(dataForExport)}
          headers={getAbstractMetaAttributes().map(el => ({ label: el, key: el }))}
        />
      </div>
      <div
        className={CompareTableClasses.columnsWrapper}
        style={{ gridTemplateColumns: `${attributeColumnWidth}px auto` }}>
        <ResizableBox
          onResize={(e, data) => {
            setAttributeColumnWidth(data.size.width);
          }}
          resizeHandles={['e']}
          width={attributeColumnWidth}
          height={Infinity}
          minConstraints={[110, Infinity]}
          maxConstraints={[250, Infinity]}
          handle={<span className={CompareTableClasses.resizer}></span>}>
          <CompareColumn data={data} customRef={customRef} col={headerCol} />
        </ResizableBox>
        <CompareColumnsWrapper customRef={customRef} />
      </div>
    </div>
  );
};

export default withReactMemo(CompareTable);
