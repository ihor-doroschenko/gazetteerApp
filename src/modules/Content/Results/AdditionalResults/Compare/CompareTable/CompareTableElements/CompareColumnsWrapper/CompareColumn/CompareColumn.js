import classNames from 'classnames';
import React from 'react';
import ReactTable from 'react-table-6';
import CompareColumnClasses from './CompareColumn.module.css';

// Wrpper component to contain a column of the compare table (based on the react-table element)

const CompareColumn = ({ data, customRef, col }) => {
  return (
    <ReactTable
      ref={customRef}
      columns={col}
      data={data}
      sortable={false}
      resizable={false}
      noDataText='No entities found'
      pageSize={data.length}
      showPagination={false}
      className={classNames('-striped -highlight', CompareColumnClasses.table)}
      getTheadProps={(table, row, col) => ({ className: CompareColumnClasses.tableHead })}
      getTrGroupProps={(table, row, col) => ({ className: CompareColumnClasses.tableRtGroup })}
      getTbodyProps={(table, row, col) => ({ className: CompareColumnClasses.tableBody })}
      getTheadThProps={(table, row, col) => ({ className: CompareColumnClasses.theadTh })}
    />
  );
};

export default CompareColumn;
