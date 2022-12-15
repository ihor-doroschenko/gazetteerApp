import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import { getSubTableColumns } from 'utils/Helpers/Columns/getSubTableColumns';
import SubTable from './SubTable';

const SubTableDataContainer = ({ entries, gazName }) => {
  const columns = getSubTableColumns(entries, gazName);
  return <SubTable columns={columns} gazName={gazName} />;
};

export default withReactMemo(SubTableDataContainer);
