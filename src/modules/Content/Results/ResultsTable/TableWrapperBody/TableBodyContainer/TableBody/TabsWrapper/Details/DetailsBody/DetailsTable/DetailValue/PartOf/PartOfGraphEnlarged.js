import { enlargedPartOfGraphHeight, enlargedPartOfGraphWidth } from 'constants/numericConstants';
import React from 'react';
import Zoom from 'react-img-zoom';
import PartOfClasses from './PartOf.module.css';

// Wrapper component to contain enlarged part-of graph of the GOV-entity. It is based on the Zoom element from react-img-zoom. It includes an auto-adjustment on the dimensions of the details view

const PartOfGraphEnlarged = ({ info }) => {
  return (
    <div className={PartOfClasses.graphEnlarged}>
      <Zoom
        img={info}
        zoomScale={5}
        width={enlargedPartOfGraphWidth}
        height={enlargedPartOfGraphHeight}
      />
    </div>
  );
};

export default PartOfGraphEnlarged;
