import React from 'react';
import { getKey } from 'utils/TextHandlers/getKey';
import ValueCellTree from '../ValueCellTree';

// Wrapper component to represent attribute value if it is an object

const ValueCellTreeForObject = ({ data }) => {
  return (
    <div>
      {Object.keys(data).map(key => {
        const renderKey = getKey(data[key], 'valueCellTreeElement');
        return typeof data[key] === 'object' ? (
          <ValueCellTree key={renderKey} data={data[key]} />
        ) : (
          <ValueCellTree key={renderKey} data={`${key} : ${data[key]}`} />
        );
      })}
    </div>
  );
};
export default ValueCellTreeForObject;
