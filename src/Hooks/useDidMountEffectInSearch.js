import { useFilterGazetteersByEnabledValue } from 'Hooks/Filter/useFilterGazetteersByEnabledValue';
import { useEffect, useRef } from 'react';

// Hook to use did mount effect for checkbox elements in search area

export function useDidMountEffectInSearch(callbackToSetValues) {
  const defaultCheckedList = useFilterGazetteersByEnabledValue();
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) {
      callbackToSetValues({ databases: defaultCheckedList });
    } else {
      didMountRef.current = true;
    }
  }, [defaultCheckedList]);
}
