import React from 'react';
import DetailAttributeClasses from './DetailAttribute.module.css';

// Component to contain an attribute of the details data

const DetailAttribute = ({ attribute }) => {
  return <div className={DetailAttributeClasses.attribute}>{attribute}</div>;
};

export default DetailAttribute;
