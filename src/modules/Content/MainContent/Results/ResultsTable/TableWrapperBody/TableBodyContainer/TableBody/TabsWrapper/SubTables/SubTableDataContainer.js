import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import { getSubTableColumns } from 'utils/Helpers/Columns/getSubTableColumns/getSubTableColumns';
import SubTable from './SubTable';

const SubTableDataContainer = ({ entries, gazName, color }) => {
  const columns = getSubTableColumns(entries, gazName, color);
  return <SubTable columns={columns} gazName={gazName} />;
};

export default withReactMemo(SubTableDataContainer);
