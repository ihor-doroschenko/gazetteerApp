import { useEffect, useState } from 'react';
import { filterIsEssential } from 'utils/Filtering/filterIsEssential';
import { filterIsFilled } from 'utils/Filtering/filterIsFilled';
import { getAttributesAndValuesOfEntity } from 'utils/ObjectOperations/getAttributesAndValuesOfEntity';
import { sortObject } from 'utils/Sorting/sortObject';

// Hook to generate details data to render in the detail view

export function useDetailsData(details) {
  let [detailsToRender, setDetailsToRender] = useState([]);
  const { detail, isFilled, isEssential } = details;
  useEffect(() => {
    const sortedFilled = filterIsFilled(isFilled, sortObject(detail));
    const sortedEssential = filterIsEssential(isEssential, sortedFilled);
    setDetailsToRender(getAttributesAndValuesOfEntity(sortedEssential));
  }, [details]);

  return detailsToRender;
}
