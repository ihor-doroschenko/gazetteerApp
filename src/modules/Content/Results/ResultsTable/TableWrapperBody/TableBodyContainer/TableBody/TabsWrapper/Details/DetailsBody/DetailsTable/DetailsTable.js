import classNames from 'classnames';
import { useDetailsColumns } from 'Hooks/Details/useDetailsColumns';
import React from 'react';
import ReactTable from 'react-table-6';
import { setShadowFromTop } from 'utils/Styling/SubTable/setShadowFromTop';
import DetailsClasses from '../../Details.module.css';

// Wrapper component to contain table to show the details data in the details view. It is based on the table element from react-tables (v6)

const DetailsTable = props => {
  const { data, ...other } = props;
  return (
    <ReactTable
      columns={useDetailsColumns(other)}
      data={data}
      sortable={false}
      noDataText='No entities found'
      pageSize={data.length}
      showPagination={false}
      className={classNames(
        '-striped -highlight',
        'shadowInResultsTable',
        DetailsClasses.detailsTable
      )}
      getTbodyProps={el => setShadowFromTop()}
    />
  );
};

export default DetailsTable;
