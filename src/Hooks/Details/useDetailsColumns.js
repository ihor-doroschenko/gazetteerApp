import { useEffect, useState } from 'react';
import { getDetailColumns } from 'utils/Helpers/Columns/getDetailColumns';

// Hook to generate columns for the detail view on change in the details array

export function useDetailsColumns(props) {
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    setColumns(getDetailColumns({ ...props }));
  }, [props.details]);
  return columns;
}
