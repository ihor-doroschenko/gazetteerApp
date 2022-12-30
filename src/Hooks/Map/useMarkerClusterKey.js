import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getMouseOverElementInfinite } from 'selectors/simple-selectors/map-interaction-selectors';

// Hook to apply a key for marker-cluster component on mouseOverElementInfinite change

export const useMarkerClusterKey = () => {
  const [key, setKey] = useState('key');
  const mouseOverElementInfinite = useSelector(getMouseOverElementInfinite);
  useEffect(() => {
    setKey(`key-${mouseOverElementInfinite.id}`);
  }, [mouseOverElementInfinite.id]);
  return key;
};
