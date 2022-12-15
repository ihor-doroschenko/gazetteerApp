import React from 'react';
import ValueCellTree from '../ValueCellTree';

// Wrapper component to represent attribute value if it is an array

const ValueCellTreeForArray = ({ data }) => {
  return (
    <>
      {data.map(item => (
        <ValueCellTree data={item} />
      ))}
    </>
  );
};
export default ValueCellTreeForArray;
