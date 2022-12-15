import React from 'react';
import OriginalAttributeClasses from './OriginalAttribute.module.css';

// Component to contain original name of the attribute which value is currently being shown

const OriginalAttribute = ({ originalAttribute }) => {
  return (
    <span className={OriginalAttributeClasses.wrapper}>
      (
      <em>
        "{Array.isArray(originalAttribute) ? originalAttribute.join('; ') : originalAttribute}"
      </em>
      )
    </span>
  );
};
export default OriginalAttribute;
