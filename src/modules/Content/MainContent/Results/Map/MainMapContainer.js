import { useBottomContainerHeight } from 'Hooks/Bottom/useBottomContainerHeight';
import { useMapAnimation } from 'Hooks/Map/useMapAnimation';
import { useMapDimensions } from 'Hooks/Map/useMapDimensions';
import { useMapHeight } from 'Hooks/Map/useMapHeight';
import React, { useState } from 'react';
import MainMap from './MainMap';

const MainMapContainer = props => {
  const [isAnimation, setIsAnimation] = useState(false);

  useBottomContainerHeight();
  useMapAnimation(isAnimation, setIsAnimation);
  const mapHeight = useMapHeight();
  let { actualWidth: actualMapWidth, marginLeft, marginRight } = useMapDimensions();
  return (
    <div
      style={{
        height: mapHeight,
        width: actualMapWidth ? actualMapWidth : '100%',
        marginLeft: marginLeft,
        marginRight: marginRight,
        transition: isAnimation && 'width 0.5s, margin 0.5s',
      }}>
      <MainMap actualMapWidth={actualMapWidth} />
    </div>
  );
};

export default MainMapContainer;
