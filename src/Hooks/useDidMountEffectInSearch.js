import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getGazetteers } from 'selectors/simple-selectors/search-selectors';

// Hook to use did mount effect for checkbox elements in search window

export function useDidMountEffectInSearch(callbackToSetValues) {
  const gazetteers = useSelector(getGazetteers);
  const defaultCheckedList = gazetteers.filter(g => g.value).map(g => g.gazName);
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) {
      callbackToSetValues({ databases: defaultCheckedList });
    } else {
      didMountRef.current = true;
    }
  }, [defaultCheckedList]);
}
