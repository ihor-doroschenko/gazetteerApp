import React from 'react';
import { ResizableBox } from 'react-resizable';
import CompareColumn from '../CompareColumnsWrapper/CompareColumn/CompareColumn';
import CompareTableHeaderColumnClasses from './CompareTableHeaderColumn.module.css';

const CompareTableHeaderColumn = ({ setColumnWidth, columnWidth, data, customRef, headerCol }) => {
  return (
    <ResizableBox
      onResize={(e, data) => setColumnWidth(data.size.width)}
      resizeHandles={['e']}
      width={columnWidth}
      height={Infinity}
      minConstraints={[110, Infinity]}
      maxConstraints={[250, Infinity]}
      handle={<span className={CompareTableHeaderColumnClasses.resizer}></span>}>
      <CompareColumn data={data} customRef={customRef} col={headerCol} />
    </ResizableBox>
  );
};
export default CompareTableHeaderColumn;
