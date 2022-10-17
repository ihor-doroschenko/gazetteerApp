import React from 'react';
import { useDispatch } from 'react-redux';
import { changePartOfIsEnlarged } from 'redux/details-reducer';
import GOVInfoText from './GOVInfoText/GOVInfoText';
import PartOfClasses from './PartOf.module.css';

const PartOfImage = ({ image, id }) => {
  const dispatch = useDispatch();
  const img = new Image();
  img.src = image.info;

  return (
    <div className={PartOfClasses.standardGOVBild}>
      <img
        src={image.info}
        onClick={() => dispatch(changePartOfIsEnlarged(id, true))}
        alt='part of...'
      />
      <GOVInfoText />
    </div>
  );
};

export default PartOfImage;
