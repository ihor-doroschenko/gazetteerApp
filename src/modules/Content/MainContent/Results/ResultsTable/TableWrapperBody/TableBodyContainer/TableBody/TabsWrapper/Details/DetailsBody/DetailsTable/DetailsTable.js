import classNames from 'classnames';
import { useDetailsColumns } from 'Hooks/Details/useDetailsColumns';
import React from 'react';
import ReactTable from 'react-table-6';
import { setShadowFromTop } from 'utils/Styling/SubTable/setShadowFromTop';
import DetailsClasses from '../../Details.module.css';

const DetailsTable = props => {
  const { data, ...other } = props;
  return (
    <ReactTable
      columns={useDetailsColumns(other)}
      data={data}
      sortable={false}
      noDataText='No entries found'
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
