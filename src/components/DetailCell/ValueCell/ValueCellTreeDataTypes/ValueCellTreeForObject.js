import React from 'react';
import ValueCellTree from '../ValueCellTree';

// Wrapper component to represent attribute value if it is an object

const ValueCellTreeForObject = ({ data }) => {
  return (
    <div>
      {Object.keys(data).map(key => {
        return typeof data[key] === 'object' ? (
          <ValueCellTree key={data[key]} data={data[key]} />
        ) : (
          <ValueCellTree key={`${key} : ${data[key]}`} data={`${key} : ${data[key]}`} />
        );
      })}
    </div>
  );
};
export default ValueCellTreeForObject;
