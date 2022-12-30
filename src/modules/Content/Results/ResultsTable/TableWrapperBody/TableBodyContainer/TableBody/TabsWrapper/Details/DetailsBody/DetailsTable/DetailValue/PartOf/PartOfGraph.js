import React from 'react';
import { useDispatch } from 'react-redux';
import { changePartOfImageProperty } from 'redux/details-reducer';
import GOVInfoText from './GOVInfoText/GOVInfoText';
import PartOfClasses from './PartOf.module.css';

// Component to form and show the part-of graph

const PartOfGraph = ({ image, id }) => {
  const dispatch = useDispatch();
  const img = new Image();
  img.src = image.info;

  return (
    <div className={PartOfClasses.standardGOVgraph}>
      <img
        src={image.info}
        onClick={() => dispatch(changePartOfImageProperty(id, 'isEnlarged', true))}
        alt='part of...'
      />
      <GOVInfoText />
    </div>
  );
};

export default PartOfGraph;
