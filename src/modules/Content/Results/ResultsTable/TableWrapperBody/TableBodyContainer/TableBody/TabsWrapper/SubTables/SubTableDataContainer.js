import { withReactMemo } from 'HOCs/withReactMemo';
import { useSubTableDataContainer } from 'Hooks/Subtable/useSubTableDataContainer';
import React from 'react';
import { getSubTableColumns } from 'utils/Helpers/Columns/getSubTableColumns';
import SubTable from './SubTable';

// Wrapper component to provide data and columns for the SubTable component

const SubTableDataContainer = ({ gazName }) => {
  const entities = useSubTableDataContainer(gazName);
  const columns = getSubTableColumns(entities, gazName);
  return <SubTable columns={columns} gazName={gazName} />;
};

export default withReactMemo(SubTableDataContainer);
