import { useBottomContainerHeight } from 'Hooks/Bottom/useBottomContainerHeight';
import { useMapAnimation } from 'Hooks/Map/useMapAnimation';
import { useMapDimensions } from 'Hooks/Map/useMapDimensions';
import { useMapHeight } from 'Hooks/Map/useMapHeight';
import React, { useState } from 'react';
import MainMap from './MainMap';

// Wrapper component to provide to the map such additional functionalities as dynamic dimension adjustment and animation

const MainMapContainer = props => {
  const [isAnimation, setIsAnimation] = useState(false);
  useBottomContainerHeight();
  useMapAnimation(isAnimation, setIsAnimation);
  const mapHeight = useMapHeight();
  let { actualWidth, marginLeft, marginRight } = useMapDimensions();
  return (
    <div
      style={{
        height: mapHeight,
        width: actualWidth ? actualWidth : '100%',
        marginLeft: marginLeft,
        marginRight: marginRight,
        transition: isAnimation && 'width 0.5s, margin 0.5s',
      }}>
      <MainMap actualWidth={actualWidth} />
    </div>
  );
};

export default MainMapContainer;
