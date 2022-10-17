import { faPen, faTimes, faVectorSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import BoundingBoxClasses from './BoundingBox.module.css';

const BoundingBoxRemoveElement = ({ shouldDraw, shouldRemove }) => {
  return (
    <div className={BoundingBoxClasses.iconContainer}>
      <FontAwesomeIcon icon={faVectorSquare} />
      {shouldDraw && <FontAwesomeIcon icon={faPen} className={BoundingBoxClasses.subIcon} />}
      {shouldRemove && <FontAwesomeIcon icon={faTimes} className={BoundingBoxClasses.subIcon} />}
    </div>
  );
};

export default BoundingBoxRemoveElement;
