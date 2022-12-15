import { faPen, faTimes, faVectorSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import BoundingBoxClasses from './BoundingBox.module.css';

// Component to contain bounding box icon. It works conditionally depending on current state of the tool (remove, draw or default mode). It adds cross (for remove mode), pen (for draw mode) or nothing (for default mode)

const BoundingBoxIcon = ({ shouldDraw, shouldRemove }) => {
  return (
    <div className={BoundingBoxClasses.iconContainer}>
      <FontAwesomeIcon icon={faVectorSquare} />
      {shouldDraw && <FontAwesomeIcon icon={faPen} className={BoundingBoxClasses.subIcon} />}
      {shouldRemove && <FontAwesomeIcon icon={faTimes} className={BoundingBoxClasses.subIcon} />}
    </div>
  );
};

export default BoundingBoxIcon;
