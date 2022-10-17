import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { switchSatellite } from 'redux/nav-reducer';

// Hook to control switch of base layer to satellite view to provide a possibility to change styles, e.g. shadows

export function useSwitchSatellite(mapRef) {
  const dispatch = useDispatch();
  useEffect(() => {
    mapRef.current.leafletElement.on('baselayerchange', e =>
      dispatch(switchSatellite(e.name === 'Satellite view'))
    );
  }, []);
}
