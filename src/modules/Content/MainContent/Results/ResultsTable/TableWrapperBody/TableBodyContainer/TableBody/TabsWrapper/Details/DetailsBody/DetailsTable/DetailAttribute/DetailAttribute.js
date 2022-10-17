import React from 'react';
import DetailAttributeClasses from './DetailAttribute.module.css';

const DetailAttribute = ({ attribute }) => {
  return <div className={DetailAttributeClasses.attribute}>{attribute}</div>;
};

export default DetailAttribute;
