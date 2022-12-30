import { useEffect, useState } from 'react';
import { getColumnsForSideView } from 'utils/Helpers/Columns/getColumnsForSideView';

// Hook to use columns for the subtable in the results table in the side view

export const useColumnsForResultsSide = (getOrCreateRef, references) => {
  const [columns, setColumns] = useState([]);
  const [referencesState, setReferencesState] = useState({});
  useEffect(() => {
    setColumns(getColumnsForSideView(getOrCreateRef));
    setReferencesState(references);
  }, []);
  return { referencesState, columns };
};
