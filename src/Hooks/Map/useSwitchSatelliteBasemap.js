import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { switchSatelliteBasemap } from 'redux/nav-reducer';

// Hook to control switch of base layer to satellite view to provide a possibility to change styles, e.g. shadows

export function useSwitchSatelliteBasemap(mapRef) {
  const dispatch = useDispatch();
  useEffect(() => {
    mapRef.current.leafletElement.on('baselayerchange', e =>
      dispatch(switchSatelliteBasemap(e.name === 'Satellite view'))
    );
  }, []);
}
